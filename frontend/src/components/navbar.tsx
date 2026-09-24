import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import tempLogo from "../assets/tempLogo.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import Icon from "./utils/icon";
import { Link } from "react-router";
import { RowCenter } from "./utils/flex";

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
	text-decoration: none;

	&:hover {
		color: #000000;
		background-color: #FFFFFF;
	}
`;

interface NavItemProps {
	image?: boolean;
	to: string;
};

const NavItemLink: React.FC<PropsWithChildren<NavItemProps>> = ({
	image=false,
	to,
	children,
}) => {
	return (
		<NavItem
			as={Link}
			to={to}
			style={image ? {width: `${navbarHeightRem}rem`, flex: "unset"} : {}}
		>
			{children}
		</NavItem>
	);
};

const NavBar: React.FC = () => {
	return (
		<Bar style={{ justifyContent: "space-between", gap: `${navbarHeightRem}rem` }}>
			<NavItemLink to="/" image>
				<img style={{ height: "100%" }} src={tempLogo} />
			</NavItemLink>
			<RowCenter style={{ width: "50%" }}>
				<NavItemLink to="/topics">Topics</NavItemLink>
				<NavItemLink to="/articles">Articles</NavItemLink>
				<NavItemLink to="/create">Create</NavItemLink>
				<NavItemLink to="/about">About</NavItemLink>
			</RowCenter>
			<NavItemLink to="/profile" image>
				<Icon Icon={BsFillPersonFill} iconProps={{ size: 30 }} />
			</NavItemLink>
		</Bar>
	);
};

export default NavBar;
