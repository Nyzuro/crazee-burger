import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProduct from "./TabsContent/AddProduct";

export const getTabsConfig = () => [
	{
		index: "add",
		label: "Ajouter un produit",
		Icon: <AiOutlinePlus />,
		content: <AddProduct />,
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
