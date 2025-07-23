import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function HintMessage() {
	return (
		<HintMessageStyled>
			"Cliquer sur un produit du menu pour le modifier"
			<HiCursorClick />
		</HintMessageStyled>
	);
}

const HintMessageStyled = styled.div`
	font-family: "Amatic SC", sans-serif;
	font-size: ${theme.fonts.size.P3};
	font-weight: ${theme.fonts.weights.light};
	color: ${theme.colors.greyDark};

	display: flex;
	align-items: center;
	gap: 9px;
	padding-top: 50px;
`;
