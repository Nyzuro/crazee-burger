import { createContext } from "react";

export default createContext({
	isModeAdmin: false,
	setIsModeAdmin: () => {},

	menu: [],
	setMenu: () => {},

	isCollapsed: false,
	setIsCollapsed: () => {},

	currentTabSelected: "",
	setCurrentTabSelected: "",

	handleAdd: () => {},
	handleDelete: () => {},

	resetMenu: () => {},

	newProduct: {},
	setNewProduct: () => {},

	selectTab: () => {},

	cardClicked: 1,
	setCardClicked: () => {},

	titleInputRef: { current: null },
});
