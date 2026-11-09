import { env } from "cloudflare:workers";
import { Article, TagColor } from "../../types/article.js";

interface GetArticleResult {
	articleID: number,
	imageURL: string,
	topic: string,
	typeName: string,
	typeColor: TagColor,
	headline: string,
	datePublished?: string,
	createdAt: string,
	updatedAt: string,
};

const baseArticleQuery = `
SELECT
	a.articleID,
	a.imageURL,
	t.name AS topic,
	at.name as typeName,
	at.tagColor AS typeColor,
	a.headline,
	a.datePublished,
	a.createdAt,
	a.updatedAt
FROM Articles a
LEFT JOIN Topics t
	ON a.topicID = t.topicID
LEFT JOIN ArticleTypes at
	ON a.typeID = at.typeID
`;

class ArticleModel {

	public constructor() {
		(() => {})();
	}

	public getArticle = async (articleID: number) => {
		const { results } = await env.blog_db.prepare(`
			${baseArticleQuery}
			WHERE a.articleID = ?
		`).bind(articleID).run<GetArticleResult>();

		if (!results || !results.length) return null;

		return this.toArticle(results[0]);
	};

	public getArticles = async (top: number = 20) => {
		const { results } = await env.blog_db.prepare(`
			${baseArticleQuery}
			ORDER BY a.datePublished DESC
			LIMIT ?
		`).bind(top).run<GetArticleResult>();

		return results.map(r => this.toArticle(r));
	};

	private toArticle = (result: GetArticleResult) => {
		const article: Article = {
			articleID: result.articleID,
			imageURL: result.imageURL,
			topic: result.topic,
			type: {
				name: result.typeName,
				tagColor: result.typeColor,
			},
			headline: result.headline,
			datePublished: result.datePublished ? new Date(result.datePublished) : null,
			createdAt: new Date(result.createdAt),
			updatedAt: new Date(result.updatedAt),
		};

		return article;
	};

}

export default ArticleModel;
