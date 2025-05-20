import { MdModeEditOutline } from "react-icons/md";

export default function EditProductButton({
	activePanel,
	setActivePanel,
	isAdminPanelOpen,
	setIsAdminPanelOpen,
}) {
	const handleClick = () => {
		setActivePanel("edit");
		!isAdminPanelOpen && setIsAdminPanelOpen(true);
	};

	return (
		<button
			className={activePanel === "edit" ? "dark-theme" : "white-theme"}
			onClick={handleClick}
		>
			<MdModeEditOutline />
			Modifier un produit
		</button>
	);
}
