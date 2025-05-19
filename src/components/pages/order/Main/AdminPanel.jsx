import { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";

export default function AdminPanel() {
	const [activePanel, setActivePanel] = useState("add");
	const { isModeAdmin } = useContext(OrderContext);

	return (
		<>
			{isModeAdmin && (
				<AdminPanelStyled>
					<div className="navigation">
						<button className="white-theme">
							<FiChevronDown />
						</button>

						<button
							className={
								activePanel === "add" ? "dark-theme" : "white-theme"
							}
							onClick={() => setActivePanel("add")}
						>
							<AiOutlinePlus />
							Ajouter un produit
						</button>

						<button
							className={
								activePanel === "edit" ? "dark-theme" : "white-theme"
							}
							onClick={() => setActivePanel("edit")}
						>
							<MdModeEditOutline />
							Modifier un produit
						</button>
					</div>

					<div className="panel">
						{activePanel === "add"
							? "Ajouter un produit"
							: "Modifier un produit"}
					</div>
				</AdminPanelStyled>
			)}
		</>
	);
}
const AdminPanelStyled = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;

	.navigation {
		padding-left: 70px;
		display: flex;
		flex-direction: row;
		gap: 1px;

		.white-theme {
			padding: 13px 22px;
			border: 1px solid ${theme.colors.greyLight};
			border-bottom: 2px solid ${theme.colors.greyLight};
			color: ${theme.colors.greySemiDark};
			background-color: ${theme.colors.white};
			border-top-right-radius: ${theme.borderRadius.round};
			border-top-left-radius: ${theme.borderRadius.round};
			font-size: ${theme.fonts.size.P0};
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 13px;

			&:hover {
				text-decoration: underline;
				cursor: pointer;
				border-bottom: none;
			}
		}

		.dark-theme {
			padding: 13px 22px;
			border: 1px solid ${theme.colors.background_dark};
			border-bottom: 2px solid ${theme.colors.background_dark};
			color: ${theme.colors.white};
			background-color: ${theme.colors.background_dark};
			border-top-right-radius: ${theme.borderRadius.round};
			border-top-left-radius: ${theme.borderRadius.round};
			font-size: ${theme.fonts.size.P0};
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 13px;

			&:hover {
				text-decoration: underline;
				cursor: pointer;
				border-bottom: none;
			}
		}
	}
	.panel {
		height: 250px;
		padding: 17px 21px;
		border: 1px solid #e4e5e9;
		background-color: ${theme.colors.white};
	}
`;
