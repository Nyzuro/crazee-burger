import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";

export const getTabsConfig = () => [
	{
		index: "add",
		label: "Ajouter un produit",
		Icon: <AiOutlinePlus />,
		content: <AddForm />,
	},
	{
		index: "edit",
		label: "Modifier un produit",
		Icon: <MdModeEditOutline />,
		// content: EditProductContent,
	},
];

export const getTabSelected = (tabs, currentTabSelected) =>
	tabs.find((tab) => tab.index === currentTabSelected);
