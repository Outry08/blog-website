import styled from "styled-components";

const LinkList = styled.ul`
	list-style: none;
	text-decoration: underline;
	font-style: italic;

	& > :hover {
		color: #cccccc;
		cursor: pointer;
		user-select: none;
		text-decoration: underline #cccccc;
	}
`;

export default LinkList;
