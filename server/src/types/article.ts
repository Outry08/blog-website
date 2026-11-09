export type TagColor = "red" | "green" | "yellow" | "blue" | "black" | "white" | "grey";

export interface Article {
	articleID: number,
	imageURL: string,
	topic: string,
	type: ArticleType,
	headline: string,
	datePublished: Date | null,
	createdAt: Date,
	updatedAt: Date,
}

export interface ArticleType {
	name: string,
	tagColor: TagColor,
}
