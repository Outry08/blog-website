-- npx wrangler d1 execute blog-db --local --file=./schema/schema_insert.sql

DELETE FROM Topics;
DELETE FROM ArticleTypes;
DELETE FROM Articles;

INSERT INTO Topics
	(name)
VALUES
	("Danganronpa"),
	("Iron Lung"),
	("Halo");

INSERT INTO ArticleTypes
	(name, tagColor)
VALUES
	("ranking", "yellow"),
	("comparison", "blue"),
	("review", "red"),
	("opinion", "green"),
	("analysis", "grey");

INSERT INTO Articles
	(imageURL, topicID, typeID, headline, datePublished)
VALUES
	("tempArticleThumb1.jpg", 1, 2, "Comparing All Aspects of The Main Danganronpa Games", "10/03/2026"),
	("tempArticleThumb2.jpg", 2, 3, "A Review of Markiplier's 'Iron Lung'", NULL),
	("tempArticleThumb3.jpg", 3, 1, "Ranking All The Mainline Halo Games", "10/05/2026");
