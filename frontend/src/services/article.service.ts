import { ArticleCardInfo } from "../types/article";

export const fetchArticle = async (articleID: number): Promise<ArticleCardInfo> => {
	const result = await fetch(`${import.meta.env.VITE_SERVER_URL}/article/${articleID}`);
	const rawArticle: ArticleCardInfo = (await result.json()).article;
	return sanitizeArticle(rawArticle);
};

export const fetchTopNArticles = async (N: number): Promise<ArticleCardInfo[]> => {
	const result = await fetch(`${import.meta.env.VITE_SERVER_URL}/article?top=${N}`);
	const rawArticles: ArticleCardInfo[] = (await result.json()).articles;

	const articles = rawArticles.map(a => sanitizeArticle(a));

	return articles;
};

// To convert string-date into actual Date datatype
const sanitizeArticle = (article: ArticleCardInfo): ArticleCardInfo => {
	return {
		...article,
		datePublished: article.datePublished ? new Date(article.datePublished) : null,
	};
};
