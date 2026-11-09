import { TagColor } from "./tag";

export interface ArticleType {
	name: string,
	tagColor: TagColor,
}

export interface ArticleCardInfo {
	articleID: number;
	imageURL: string;
	topic: string; //Franchise article is about
	type: ArticleType; //Type of article i.e. review, ranking, comparison, etc.
	headline: string;
	datePublished: Date | null;
};
