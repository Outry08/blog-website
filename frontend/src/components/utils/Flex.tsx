import styled from "styled-components";

interface FlexProps {
	dir: "row" | "column";
	center?: boolean;
	gap?: number;
	align?: "left" | "right";
	between?: boolean;
};

const Flex = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${props => props.dir};
	align-items: ${props => props.align ? props.align : "center"};
	${props => props.center ? "justify-content: center;" : ""}
	${props => props.between ? "justify-content: space-between;" : ""}
	${props => props.gap ? `gap: ${props.gap}rem;` : ""};
`;

export default Flex;
