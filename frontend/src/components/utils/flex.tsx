import styled from "styled-components";

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const RowCenter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Column = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`

const ColumnCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export {
	Row,
	RowCenter,
	Column,
	ColumnCenter,
};
