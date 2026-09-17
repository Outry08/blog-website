const port = 3000;
import express from "express";
import ArticleRouter from "./routes/article.route.js";

const app = express();

app.get("/hello", (req, res) => {
	console.log("YEET");
	res.send("Hello World!");
});

app.use("/article", ArticleRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
