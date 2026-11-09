const port = 3000;
import express from "express";
import { httpServerHandler } from "cloudflare:node";
import ArticleRouter from "./routes/article.route.js";
import { CORSHeaders } from "./util/cors.js";

const app = express();

app.use((req, res, next) => {
	res.set(CORSHeaders);
	next();
});

app.use("/api/article", ArticleRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));

export default httpServerHandler({ port: port });
