const port = 3000;
import express from "express";
import { httpServerHandler } from "cloudflare:node";
import ArticleRouter from "./routes/article.route.js";

const app = express();

app.get("/api/hello", (req, res) => {
	console.log("YEET");
	res.send("Hello World!");
});

app.use("/api/article", ArticleRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));

export default httpServerHandler({ port: port });
