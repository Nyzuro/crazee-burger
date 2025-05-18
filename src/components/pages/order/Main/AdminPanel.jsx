import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminPanel() {
	return (
		<AdminPanelStyled>
			<div className="navigation">
				<button className="button-white">
					<FiChevronDown />
				</button>
				<button className="button-white">
					<AiOutlinePlus />
					Ajouter un produit
				</button>
				<button className="button-white">
					<MdModeEditOutline />
					Modifier un produit
				</button>
			</div>
			<div className="panel">Panel</div>
		</AdminPanelStyled>
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

		.button-white {
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

		/* .add-product {
			background-color: ${theme.colors.background_dark};
			color: ${theme.colors.white};
			padding: 10px 22px;
			font-size: ${theme.fonts.size.P0};
			border: 1px solid ${theme.colors.background_dark};
			border-bottom: 2px;
			border-top-right-radius: ${theme.borderRadius.round};
			border-top-left-radius: ${theme.borderRadius.round};

			.icon-plus {
				margin-right: 13px;
			}
		} */
	}
	.panel {
		height: 250px;
		background-color: yellow;
	}
`;
