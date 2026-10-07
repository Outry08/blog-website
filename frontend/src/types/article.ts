export type ArticleType = "ranking" | "comparison" | "review" | "opinion" | "analysis";

export interface ArticleCardInfo {
	articleID: number;
	imageURL: string;
	topic: string; //Franchise article is about
	type: ArticleType; //Type of article i.e. review, ranking, comparison, etc.
	headline: string;
	date: Date;
};
