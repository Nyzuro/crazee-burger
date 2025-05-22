import { createContext } from "react";

export default createContext({
	isModeAdmin: false,
	setIsModeAdmin: () => {},
	menu: {},
	setMenu: () => {},
	isCollapsed: false,
	setIsCollapsed: () => {},
	isAddSelected: false,
	setIsAddSelected: () => {},
	isEditSelected: false,
	setIsEditSelected: () => {},
	currentTabSelected: "",
	setCurrentTabSelected: "",
});
