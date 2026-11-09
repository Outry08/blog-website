import { TagColor } from "../../types/article.js";

export interface ArticleSchema {
	articleID: number,
	imageURL: string,
	topicID: number,
	typeID: number,
	headline: string,
	datePublished: string | null;
	createdAt: string,
	updatedAt: string,
};

export interface ArticleTypeSchema {
	typeID: number,
	name: string,
	tagColor: TagColor,
	createdAt: string,
	updatedAt: string,
};

export interface TopicSchema {
	topicID: number,
	name: string,
	createdAt: string,
	updatedAt: string,
};

export interface ArticleContentsSchema {
	articleID: number,
	contentIndex: number,
	text1: string,
	text2: string,
	caption: string,
	imageURL: string,
	videoURL: string,
	number: number,
	createdAt: string,
	updatedAt: string,
};
