import { Request, Response } from "express";
import ArticleModel from "./article.model.js";

class ArticleController {

	private articleModel: ArticleModel;

	public constructor() {
		this.articleModel = new ArticleModel();
	}

	public getArticle = async (req: Request, res: Response): Promise<void> => {
		console.log("ARTICLE");
		res.status(200).send({message:"MESSAGE"});
		console.log(this);
		this.articleModel.getArticle();
	};

}

export default ArticleController;
