import styled from "styled-components";
import Logo from "../assets/tempLogo.jpg";
import Flex from "../components/utils/Flex";

const LogoImg = styled.img`
	height: 20rem;
`;

const HomePage: React.FC = () => {
	return (<>
		<Flex dir="column" gap={2} style={{ padding: "1% 2.5%" }}>
			<Flex dir="row" center>
				<h1 style={{ textAlign: "right" }}>Fan</h1>
				<LogoImg src={Logo} />
				<h1 style={{ textAlign: "left" }}>Base</h1>
			</Flex>
			<h4>Read all sorts of thoughts and opinions about all sorts of things!</h4>
			<h2 style={{ width: "100%" }}>Recent Articles:</h2>
		</Flex>
	</>);
};

export default HomePage;
