-- npx wrangler d1 execute blog-db --local --file=./schema/schema_create.sql

DROP TABLE IF EXISTS Articles;
DROP TABLE IF EXISTS ArticleContents;
DROP TABLE IF EXISTS Topics;
DROP TABLE IF EXISTS ArticleTypes;

CREATE TABLE IF NOT EXISTS Articles (
	articleID INTEGER PRIMARY KEY,
	imageURL TEXT,
	topicID INTEGER,
	typeID INTEGER,
	headline TEXT,
	datePublished TIMESTAMP,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- This table will act as an array of an article's content blocks
CREATE TABLE IF NOT EXISTS ArticleContents (
	articleID INTEGER REFERENCES Articles(articleID),
	contentIndex INTEGER NOT NULL,
	text1 TEXT,
	text2 TEXT,
	caption TEXT,
	imageURL TEXT,
	videoURL TEXT,
	number INTEGER, --Ranking number
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (articleID, contentIndex)
);

CREATE TABLE IF NOT EXISTS Topics (
	topicID INTEGER PRIMARY KEY,
	name TEXT,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS ArticleTypes (
	typeID INTEGER PRIMARY KEY,
	name TEXT,
	tagColor TEXT,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TRIGGER ua_trigger_Articles
AFTER UPDATE On Articles
BEGIN
	UPDATE Articles
	SET updatedAt = CURRENT_TIMESTAMP
	WHERE articleID = OLD.articleID;
END;

CREATE TRIGGER ua_trigger_ArticleContents
AFTER UPDATE On ArticleContents
BEGIN
	UPDATE ArticleContents
	SET updatedAt = CURRENT_TIMESTAMP
	WHERE articleID = OLD.articleID
		AND contentIndex = OLD.contentIndex;
END;

CREATE TRIGGER ua_trigger_Topics
AFTER UPDATE On Topics
BEGIN
	UPDATE Topics
	SET updatedAt = CURRENT_TIMESTAMP
	WHERE topicID = OLD.topicID;
END;

CREATE TRIGGER ua_trigger_ArticleTypes
AFTER UPDATE On ArticleTypes
BEGIN
	UPDATE ArticleTypes
	SET updatedAt = CURRENT_TIMESTAMP
	WHERE typeID = OLD.typeID;
END;
