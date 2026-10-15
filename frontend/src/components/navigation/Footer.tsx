import Flex from "../utils/Flex";
import LinkList from "../utils/LinkList";

const Footer: React.FC = () => {
	return (
		<Flex
			dir="column"
			style={{
				height: "8rem",
				color: "white",
				padding: "2rem 5rem 0.5rem",
			}}
			between
		>
			<Flex dir="row" between center style={{width: "50%"}}>
				<h2>Thanks For<br />Reading!</h2>
				<LinkList>
					<li>ABOUT</li>
					<li>CONTACT ME</li>
				</LinkList>
			</Flex>
			Copyright © Ryan McKinnon, 2026
		</Flex>
	);
};

export default Footer;
