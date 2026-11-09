import { Request, Response } from "express";
import ArticleModel from "./article.model.js";

class ArticleController {

	private articleModel: ArticleModel;

	public constructor() {
		this.articleModel = new ArticleModel();
	}

	public getArticle = async (req: Request, res: Response): Promise<void> => {
		try {
			const articleID = Number(req.params.articleID);
			const article = await this.articleModel.getArticle(articleID);
			res.status(200).send({ article: article });
		} catch (e) {
			res.status(500).send(`Failed to retrieve article: ${e}`);
		}
	};

	public getArticles = async (req: Request, res: Response): Promise<void> => {
		try {
			const top = Number(req.query.top);
			const articles = await this.articleModel.getArticles(top);
			res.status(200).send({ articles: articles });
		} catch (e) {
			res.status(500).send(`Failed to retrieve articles: ${e}`);
		}
	};

}

export default ArticleController;
