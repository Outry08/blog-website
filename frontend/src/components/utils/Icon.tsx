import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import styled from "styled-components";

type Props = {
	Icon: IconType,
	iconProps: Partial<IconBaseProps>,
}

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const Icon: React.FC<Props> = ({ Icon, iconProps }) => {
	return (
		<IconContainer>
			<Icon {...iconProps}/>
		</IconContainer>
	);
};

export default Icon;
