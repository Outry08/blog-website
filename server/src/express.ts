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

app.get("/api/hello", (req, res) => {
	console.log("YEET");
	res.status(200).send("Hello World!");
});

app.use("/api/article", ArticleRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));

export default httpServerHandler({ port: port });
