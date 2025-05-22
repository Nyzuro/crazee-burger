import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { getTabsConfig, getTabSelected } from "./getTabsConfig";

export default function AdminPanel() {
	const { currentTabSelected } = useContext(OrderContext);

	const tabs = getTabsConfig(currentTabSelected);
	const tabSelected = getTabSelected(tabs, currentTabSelected);

	return (
		<>
			<AdminPanelStyled>{tabSelected && tabSelected.label}</AdminPanelStyled>
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
