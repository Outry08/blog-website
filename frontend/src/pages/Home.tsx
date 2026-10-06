import styled from "styled-components";
import Logo from "../assets/tempLogo2.png";
import Flex from "../components/utils/Flex";
import { ArticleCardInfo } from "../types/article";
import ArticleGrid from "../components/article/ArticleGrid";

const LogoImg = styled.img`
	height: 20rem;
	margin-right: -50px;
`;

const sampleArticle: ArticleCardInfo = {
	imageURL: "/src/assets/tempArticleThumb1.jpg",
	topic: "Danganronpa",
	type: "comparison",
	headline: "Comparing All Aspects of The Main Danganronpa Games",
	date: new Date("10/03/2026"),
};

const sampleArticle2: ArticleCardInfo = {
	imageURL: "/src/assets/tempArticleThumb2.jpg",
	topic: "Iron Lung",
	type: "review",
	headline: "A Review of Markiplier's 'Iron Lung'",
	date: new Date("10/05/2026"),
};

const sampleArticle3: ArticleCardInfo = {
	imageURL: "/src/assets/tempArticleThumb3.jpg",
	topic: "Halo",
	type: "ranking",
	headline: "Ranking All The Mainline Halo Games",
	date: new Date("10/05/2026"),
};

const HomePage: React.FC = () => {
	const articles = [sampleArticle, sampleArticle2, sampleArticle3];
	
	return (<>
		<Flex dir="column" gap={2} style={{ padding: "1% 2.5%" }}>
			<Flex dir="row" center>
				<h1 style={{ textAlign: "right" }}>Fan</h1>
				<LogoImg src={Logo} />
				<h1 style={{ textAlign: "left" }}>Base</h1>
			</Flex>
			<h4>Read all sorts of thoughts and opinions about all sorts of things!</h4>
			<h2 style={{ width: "100%" }}>Recent Articles:</h2>
			<Flex dir="row" gap={1}>
				<ArticleGrid articles={articles} />
				<div style={{ width: "50px", height: "100%", textAlign: "center", border: "2px dashed" }}>
					READ MORE BOX
				</div>
			</Flex>
			<Flex dir="column" gap={0.5} center style={{width: "50%", padding: "5rem", border: "5px solid white", backgroundColor: "#ccccff", borderRadius: "1rem"}}>
				<h2>Looking For More?</h2>
				<Flex dir="row" gap={1} style={{height: "10rem"}}>
					<img src="/src/assets/tempArticleThumb2.jpg" style={{height: "100%"}}/>
					<img src="/src/assets/tempArticleThumb2.jpg" style={{height: "90%"}}/>
					<img src="/src/assets/tempArticleThumb2.jpg" style={{height: "50%"}}/>
				</Flex>
				<h5>Take a look at all the topics I've written about!</h5>
				<div>Sample Button</div>
			</Flex>
		</Flex>
	</>);
};

export default HomePage;
