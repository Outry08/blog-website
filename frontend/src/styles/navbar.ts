import styled from "styled-components";

const NavBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 50px;
	background-color: #000000;
	font-family: Helvetica;
`;

const NavItem = styled.div`
	width: 50px;
	background-color: #000000;
	color: #FFFFFF;
	text-align: center;
	transition: 0.3s;
	cursor: pointer;
	padding: clamp(5px, 1.5vh, 10px);

	&:hover {
		color: #000000;
		background-color: #FFFFFF;
	}
`;

export {
	NavBar,
	NavItem,
};
