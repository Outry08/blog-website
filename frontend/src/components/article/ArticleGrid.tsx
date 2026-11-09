import styled from "styled-components";
import { ArticleCardInfo } from "../../types/article";
import ArticleCard from "./ArticleCard";

interface ArticleGridProps {
	articles: ArticleCardInfo[];
	minCols: number;
	maxCols: number;
};

interface ArticleGridBaseProps {
	numCols: number;
};

const ArticleGridBase = styled.div<ArticleGridBaseProps>`
	display: grid;
	grid-template-columns: repeat(${props => props.numCols}, 1fr);
	width: 100%;
	gap: 1rem;
`;

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, minCols, maxCols }) => {
	return (
		<ArticleGridBase numCols={ Math.max(minCols, Math.min(articles.length, maxCols)) }>
			{articles.map(article => (
				<ArticleCard
					key={article.articleID}
					articleInfo={article}
				/>
			))}
		</ArticleGridBase>
	);
};

export default ArticleGrid;
