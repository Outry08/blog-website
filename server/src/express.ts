const port = 3000;
import express from "express";
import { httpServerHandler } from "cloudflare:node";
import ArticleRouter from "./routes/article.route.js";
import { CORSHeaders } from "./util/cors.js";
import { env } from "cloudflare:workers";

const app = express();

app.use((req, res, next) => {
	res.set(CORSHeaders);
	next();
});

app.get("/api/hello", async (req, res) => {
	console.log("YEET");
	try {
		const { results } = await env.blog_db.prepare("INSERT INTO Articles (headline) VALUES('Test Article')").run();
		res.status(200).send(`Hello World! ${results}`);
	} catch (e) {
		console.error(e);
		res.status(500).send("Error executing db command");
	}
});

app.use("/api/article", ArticleRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));

export default httpServerHandler({ port: port });
