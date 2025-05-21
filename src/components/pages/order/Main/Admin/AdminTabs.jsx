import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";

export default function AdminTabs({
	isCollapsed,
	setIsCollapsed,
	activePanel,
	setActivePanel,
}) {
	const handleClick = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<AdminTabsStyled>
			<Tab
				className={isCollapsed ? "is-active" : ""}
				Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
				onClick={handleClick}
			/>

			<Tab
				className={activePanel === "add" ? "is-active" : ""}
				Icon={<AiOutlinePlus />}
				label={"Ajouter un produit"}
				onClick={() => {
					setActivePanel("add");
					setIsCollapsed(!isCollapsed);
				}}
			/>

			<Tab
				className={activePanel === "edit" ? "is-active" : ""}
				Icon={<MdModeEditOutline />}
				label={"Modifier un produit"}
				onClick={() => {
					setActivePanel("edit");
					setIsCollapsed(!isCollapsed);
				}}
			/>
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
