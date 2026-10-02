import styled from "styled-components";

interface FlexProps {
	dir: "row" | "column";
	center?: boolean;
	gap?: number;
};

const Flex = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${props => props.dir};
	align-items: center;
	${props => props.center ? "justify-content: center;" : ""}
	${props => props.gap ? `gap: ${props.gap}rem;` : ""};
`;

export default Flex;
