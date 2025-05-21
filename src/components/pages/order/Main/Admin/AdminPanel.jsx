import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel({ activePanel }) {
	return (
		<>
			<AdminPanelStyled>
				{activePanel === "add" ? "Ajouter un produit" : "Modifier un produit"}
			</AdminPanelStyled>
		</>
	);
}

const AdminPanelStyled = styled.div`
	height: 250px;
	padding: 17px 21px;
	border: 1px solid #e4e5e9;
	background-color: ${theme.colors.white};
	box-shadow: ${theme.shadows.subtle};
`;
