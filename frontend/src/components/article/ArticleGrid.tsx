import styled from "styled-components";
import { ArticleCardInfo } from "../../types/article";
import ArticleCard from "./ArticleCard";

interface ArticleGridProps {
	articles: ArticleCardInfo[];
};

const ArticleGridBase = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
	gap: 1rem;
`;

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
	return (
		<ArticleGridBase>
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
