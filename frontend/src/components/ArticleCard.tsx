import Flex from "./utils/Flex";
import styled from "styled-components";
import { ArticleCardInfo } from "../types/article";

const CardContainer = styled.div`
	max-width: 100%;
	border-radius: 1.1rem;
	border: 1px solid #AAAAAA;
	overflow: hidden;
	transition: 0.3s;
	box-shadow: 0 0.3rem 0.3rem #888888;

	&:hover {
		background-color: #EEEEEE;
		cursor: pointer;
	}

	&:active {
		box-shadow: none;
		transform: translateY(0.3rem);
		transition: 0.05s;
	}
`;

const ThumbnailContainer = styled.div`
	aspect-ratio: 16/9;
	width: 100%;
	min-height: 0;
	border-radius: 1rem;
`;

const Thumbnail = styled.img`
	display: block;
	height: 100%;
	width: auto;
	max-width: 100%;
	margin: auto;
	border-radius: 1rem;
`;

interface ArticleCardProps {
	articleInfo: ArticleCardInfo;
	style?: React.CSSProperties;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
	articleInfo,
	style,
}) => {
	return (
		<CardContainer style={{ ...style }}>
			<Flex dir="column" align="left">
				<ThumbnailContainer>
					<Thumbnail src={articleInfo.imageURL} />
				</ThumbnailContainer>
				<h5 style={{ margin: "0.5rem" }}>{articleInfo.headline}</h5>
			</Flex>
		</CardContainer>
	);
};

export default ArticleCard;
