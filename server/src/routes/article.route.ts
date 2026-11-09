import express from "express";
import ArticleController from "../modules/article/article.controller.js";

const ArticleRouter = express.Router();
const articleController = new ArticleController();

ArticleRouter.get("/:articleID", articleController.getArticle);
ArticleRouter.get("/", articleController.getArticles);

export default ArticleRouter;
