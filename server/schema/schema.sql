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
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TRIGGER updated_at_trigger
AFTER UPDATE On Articles
BEGIN
   UPDATE Articles SET updated_at = CURRENT_TIMESTAMP WHERE articleID = NEW.articleID;
END;

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
	PRIMARY KEY (articleID, contentIndex)
);

CREATE TABLE IF NOT EXISTS Topics (
	topicID INTEGER PRIMARY KEY,
	name TEXT
);

CREATE TABLE IF NOT EXISTS ArticleTypes (
	typeID INTEGER PRIMARY KEY,
	name TEXT,
	tagColor TEXT
);
