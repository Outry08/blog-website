import React from "react";
import styled from "styled-components";
import tempLogo from "../assets/tempLogo.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import Icon from "./utils/icon";

const navbarHeightRem = 3.125;

const Bar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #000000;
	font-family: Helvetica;

`;

const NavItem = styled.div`
	flex: 1;
	height: ${navbarHeightRem}rem;
	line-height: ${navbarHeightRem}rem;
	font-size: 1.15rem;
	background-color: #000000;
	color: #FFFFFF;
	text-align: center;
	transition: 0.3s;
	cursor: pointer;
	padding: 0.625rem;

	&:hover {
		color: #000000;
		background-color: #FFFFFF;
	}
`;

const NavImage = styled.div`
	width: ${navbarHeightRem}rem;
	height: ${navbarHeightRem}rem;
	line-height: ${navbarHeightRem}rem;
	font-size: 1.25rem;
	background-color: #000000;
	color: #FFFFFF;
	text-align: center;
	transition: 0.3s;
	cursor: pointer;
	padding: 0.625rem;

	&:hover {
		color: #000000;
		background-color: #FFFFFF;
	}
`;

const NavBar: React.FC = () => {
	return (
		<Bar style={{ justifyContent: "space-between", gap: `${navbarHeightRem}rem` }}>
			<NavImage>
				<img style={{ height: "100%" }} src={tempLogo} />
			</NavImage>
			<Bar style={{ width: "50%" }}>
				<NavItem>Topics</NavItem>
				<NavItem>Articles</NavItem>
				<NavItem>Create</NavItem>
			</Bar>
			<NavImage>
				<Icon Icon={BsFillPersonFill} iconProps={{ size: 30 }} />
			</NavImage>
		</Bar>
	);
};

export default NavBar;
