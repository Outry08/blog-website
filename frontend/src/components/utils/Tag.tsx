import styled from "styled-components";
import { ColorSets, TagColor, TagColorSet, TypeColorRecord } from "../../types/tag";
import { ArticleType } from "../../types/article";

const TagDiv = styled.div<TagColorSet>`
	border-radius: 1rem;
	text-align: center;
	width: fit-content;
	padding: 0.25rem 0.5rem;
	background-color: ${props => props.background};
	color: ${props => props.text};
`;

interface TagProps {
	text: string;
	color: TagColor;
	style?: React.CSSProperties;
};

interface ArticleTagProps {
	type: ArticleType;
	style?: React.CSSProperties;
};

export const Tag: React.FC<TagProps> = ({
	text,
	color,
	style,
}) => {
	return (
		<TagDiv
			background={ColorSets[color].background}
			text={ColorSets[color].text}
			style={{ ...style }}
		>
			{text}
		</TagDiv>
	);
};

export const ArticleTag: React.FC<ArticleTagProps> = ({
	type,
	style,
}) => {
	return (
		<TagDiv
			background={ColorSets[TypeColorRecord[type]].background}
			text={ColorSets[TypeColorRecord[type]].text}
			style={{ textTransform: "capitalize", ...style }}
		>
			{type}
		</TagDiv>
	);
};
