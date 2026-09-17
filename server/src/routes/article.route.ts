import express from "express";
import ArticleController from "../modules/article/article.controller.js";

const ArticleRouter = express.Router();
const articleController = new ArticleController();

ArticleRouter.get("/", articleController.getArticle);

export default ArticleRouter;
