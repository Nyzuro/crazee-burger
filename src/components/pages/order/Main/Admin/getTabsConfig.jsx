import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (currentTabSelected) => [
	// {
	// 	index: "chevronUpDown",
	// 	label: "",
	// 	className: currentTabSelected === "add" ? "is-active" : "",
	// 	Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
	// 	onClick: () => setIsCollapsed(!isCollapsed),
	// },
	{
		index: "add",
		label: "Ajouter un produit",
		className: currentTabSelected === "add" ? "is-active :" : "",
		Icon: <AiOutlinePlus />,
	},
	{
		index: "edit",
		label: "Modifier un produit",
		className: currentTabSelected === "edit" ? "is-active :" : "",
		Icon: <MdModeEditOutline />,
	},
];
