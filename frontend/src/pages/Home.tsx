import styled from "styled-components";
import Flex from "../components/utils/Flex";
import { ArticleCardInfo } from "../types/article";
import ArticleGrid from "../components/article/ArticleGrid";
import TopicDiv from "../components/page/TopicDiv";
import { useEffect, useState } from "react";
import { fetchTopNArticles } from "../services/article.service";

const LogoImg = styled.img`
	height: 20rem;
	margin-right: -50px;
`;

const numArticles = 3;

const HomePage: React.FC = () => {
	const [articles, setArticles] = useState<ArticleCardInfo[]>([]);

	useEffect(() => {
		const fetchArticles = async () => {
			const topArticles = await fetchTopNArticles(numArticles);
			setArticles(topArticles);
		};

		fetchArticles();
	}, []);

	return (<>
		<Flex $dir="column" $gap={2} style={{ padding: "1% 2.5%" }}>
			<Flex $dir="row" $center>
				<h1 style={{ textAlign: "right" }}>Fan</h1>
				<LogoImg src="tempLogo2.png" />
				<h1 style={{ textAlign: "left" }}>Base</h1>
			</Flex>
			<h4>Read all sorts of thoughts and opinions about all sorts of things!</h4>
			<h2 style={{ width: "100%" }}>Recent Articles:</h2>
			<Flex $dir="row" $gap={1}>
				<ArticleGrid articles={articles} minCols={numArticles} maxCols={numArticles} />
				<div style={{ width: "50px", height: "100%", textAlign: "center", border: "2px dashed" }}>
					READ MORE BOX
				</div>
			</Flex>
			<TopicDiv />
			<div />
		</Flex>
	</>);
};

export default HomePage;
