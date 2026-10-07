import { useNavigate } from "react-router";
import Button from "../utils/Button";
import Flex from "../utils/Flex";

const backgroundColors = [
	"#ffdddd",
	"#ffddaa",
	"#ffffaa",
	"#ddffdd",
	"#ddddff",
	"#ddbbff",
];

const randIndex = Math.round(Math.random() * (backgroundColors.length - 1));

const TopicDiv: React.FC = () => {

	const navigate = useNavigate();

	return (
		<Flex
			dir="column"
			gap={0.5}
			center
			style={{
				width: "50%",
				padding: "3rem",
				backgroundColor: backgroundColors[randIndex],
				borderRadius: "1rem",
			}}
			className="shadowBorder"
		>
			<h2>Looking For More?</h2>
			<Flex dir="row" gap={1} style={{ height: "10rem" }}>
				{/*Down the line, these images will be the result of a random selection of three existing topics*/}
				<img src="/src/assets/tempArticleThumb2.jpg" style={{ height: "100%" }} />
				<img src="/src/assets/tempArticleThumb2.jpg" style={{ height: "90%" }} />
				<img src="/src/assets/tempArticleThumb2.jpg" style={{ height: "50%" }} />
			</Flex>
			<h5>Take a look at all the topics I've written about!</h5>
			<Button
				text="View Topics"
				onClick={() => navigate("topics")}
				font={1.5}
				bold
			/>
		</Flex>
	);
};

export default TopicDiv;
