import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";

export default function AdminTabs({}) {
	const {
		isCollapsed,
		setIsCollapsed,
		isAddSelected,
		setIsAddSelected,
		isEditSelected,
		setIsEditSelected,
	} = useContext(OrderContext);

	const selectAddTab = () => {
		setIsCollapsed(false);
		setIsAddSelected(true);
		setIsEditSelected(false);
	};

	const selectEditTab = () => {
		setIsCollapsed(false);
		setIsEditSelected(true);
		setIsAddSelected(false);
	};

	return (
		<AdminTabsStyled>
			<Tab
				className={isCollapsed ? "is-active" : ""}
				Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
				onClick={() => setIsCollapsed(!isCollapsed)}
			/>

			<Tab
				className={isAddSelected ? "is-active :" : ""}
				Icon={<AiOutlinePlus />}
				label={"Ajouter un produit"}
				onClick={selectAddTab}
			/>

			<Tab
				className={isEditSelected ? "is-active :" : ""}
				Icon={<MdModeEditOutline />}
				label={"Modifier un produit"}
				onClick={selectEditTab}
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
