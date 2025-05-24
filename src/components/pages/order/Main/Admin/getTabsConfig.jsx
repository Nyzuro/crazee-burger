import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProductContent from "./TabsContent/AddProductContent";

export const getTabsConfig = () => [
	{
		index: "add",
		label: "Ajouter un produit",
		Icon: <AiOutlinePlus />,
		content: <AddProductContent />,
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
