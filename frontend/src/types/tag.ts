import { ArticleType } from "./article";

export type TagColor = "red" | "green" | "yellow" | "blue" | "black" | "white" | "grey";

export interface TagColorSet {
	background: string;
	text: string;
};

export const ColorSets: Record<TagColor, TagColorSet> = {
	"red": {
		"background": "#ffb2b2",
		"text": "#bb0000",
	},
	"green": {
		"background": "#b2ffb2",
		"text": "#008800",
	},
	"yellow": {
		"background": "#ffffb2",
		"text": "#dd8800",
	},
	"blue": {
		"background": "#b2b2ff",
		"text": "#0000ff",
	},
	"black": {
		"background": "#000000",
		"text": "#ffffff",
	},
	"white": {
		"background": "#ffffff",
		"text": "#000000",
	},
	"grey": {
		"background": "#cccccc",
		"text": "#000000",
	},
};

export const TypeColorRecord: Record<ArticleType, TagColor> = {
	"ranking": "yellow",
	"comparison": "blue",
	"review": "red",
	"opinion": "green",
	"analysis": "grey",
};
