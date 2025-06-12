import styled from "styled-components";
import { theme } from "../../../../../theme";
import Button from "../../../../reusable-ui/Button";

export default function EmptyMenuAdmin({ resetMenu }) {
	return (
		<EmptyMenuAdminStyled>
			<span className="title">LE MENU EST VIDE ?</span>
			<span className="description">Cliquez ci-dessous pour le réinitialiser</span>
			<Button
				label={"Générer de nouveaux produits"}
				className="button"
				onClick={resetMenu}
				version="primary"
			/>
		</EmptyMenuAdminStyled>
	);
}

const EmptyMenuAdminStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	font-family: "Amatic SC", sans-serif;
	font-size: ${theme.fonts.size.P4};

	.title {
		color: ${theme.colors.greyBlue};
		font-weight: ${theme.fonts.weights.bold};
	}

	.description {
		color: ${theme.colors.greyBlue};
		font-weight: ${theme.fonts.weights.regular};
		margin-top: 20px;
	}

	button {
		margin-top: 30px;
		font-size: ${theme.fonts.size.XS};
		width: auto;
	}
`;
