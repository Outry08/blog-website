import Flex from "../utils/Flex";
import styled from "styled-components";
import { ArticleCardInfo } from "../../types/article";
import { ArticleTag } from "../utils/Tag";

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
			<Flex dir="column" align="left" between style={{height: "100%"}}>
				<ThumbnailContainer>
					<ArticleTag type={articleInfo.type} style={{ position: "absolute", margin: "0.5rem" }} />
					<Thumbnail src={articleInfo.imageURL} />
				</ThumbnailContainer>
				<div style={{ margin: "0.5rem" }}>
					<h5>{articleInfo.headline}</h5>
					<Flex dir="row" between>
						<h6>{articleInfo.topic}</h6>
						<h6>{articleInfo.date.toDateString()}</h6>
					</Flex>
				</div>
			</Flex>
		</CardContainer>
	);
};

export default ArticleCard;
