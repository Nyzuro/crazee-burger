import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
	const { isAddSelected, isEditSelected } = useContext(OrderContext);

	return (
		<>
			<AdminPanelStyled>
				{isAddSelected && "Ajouter un produit"}
				{isEditSelected && "Modifier un produit"}
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
