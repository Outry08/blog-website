import { Color } from "color-core";
import styled from "styled-components";

interface BaseButtonProps {
	textColor: string;
	backColor: string;
	hoverColor: string;
	font: number;
	bold: boolean;
	padding: string;
}

const BaseButton = styled.div.attrs({ className: "shadowButton" })<BaseButtonProps>`
	padding: ${props => props.padding};
	font-size: ${props => props.font}rem;
	color: ${props => props.textColor};
	background-color: ${props => props.backColor};
	border: 3px solid;
	border-radius: 0.5rem;
	${props => props.bold ? "font-weight: bold;" : ""}

	&:hover {
		background-color: ${props => props.hoverColor};
	}
`;

interface ButtonProps {
	text: string;
	onClick: () => void;
	textColor?: string;
	backColor?: string;
	font?: number;
	bold?: boolean;
};

const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	textColor = "#000000",
	backColor = "#FFFFFF",
	font = 1,
	bold = false,
}) => {
	const paddingV = 0.5 * font;
	const paddingH = 1 * font;
	const tempBackColor = new Color(backColor);

	//Determining whether the background colour is light or dark in order to know if the hover colour should get lighter or darker.
	const hoverColor = tempBackColor.getBrightness() >= 100
		? tempBackColor.adjustLightness(-10)
		: tempBackColor.adjustLightness(10);

	return (
		<BaseButton
			onClick={onClick}
			textColor={textColor}
			backColor={backColor}
			hoverColor={hoverColor.toHex()}
			font={font}
			bold={bold}
			padding={`${paddingV}rem ${paddingH}rem`}
		>
			{text}
		</BaseButton>
	);
};

export default Button;
