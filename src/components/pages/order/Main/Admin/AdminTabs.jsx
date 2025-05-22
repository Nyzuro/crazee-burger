import { useContext } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs({}) {
	const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } =
		useContext(OrderContext);

	const selectTab = (tabSelected) => {
		setIsCollapsed(false);
		setCurrentTabSelected(tabSelected);
	};

	const tabs = getTabsConfig(currentTabSelected);

	return (
		<AdminTabsStyled>
			<Tab
				className={isCollapsed ? "is-active" : ""}
				Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
				onClick={() => setIsCollapsed(!isCollapsed)}
			/>

			{tabs.map((tab) => {
				return (
					<Tab
						label={tab.label}
						className={tab.className}
						Icon={tab.Icon}
						onClick={() => selectTab(tab.index)}
					/>
				);
			})}
		</AdminTabsStyled>
	);
}

const AdminTabsStyled = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1px;
	height: 43px;

	.is-active {
		border-color: ${theme.colors.background_dark};
		color: ${theme.colors.white};
		background-color: ${theme.colors.background_dark};

		&:hover {
			border-bottom: 2px solid ${theme.colors.background_dark};
		}
	}
`;
