import { AiOutlinePlus } from "react-icons/ai";

export default function AddProductButton({
	activePanel,
	setActivePanel,
	isAdminPanelOpen,
	setIsAdminPanelOpen,
}) {
	const handleClick = () => {
		setActivePanel("add");
		!isAdminPanelOpen && setIsAdminPanelOpen(true);
	};

	return (
		<button
			className={activePanel === "add" ? "dark-theme" : "white-theme"}
			onClick={handleClick}
		>
			<AiOutlinePlus />
			Ajouter un produit
		</button>
	);
}
