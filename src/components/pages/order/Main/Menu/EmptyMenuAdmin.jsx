import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../../theme";

export default function EmptyMenuAdmin({ resetMenu }) {
	return (
		<EmptyMenuAdminStyled>
			<h1>LE MENU EST VIDE ?</h1>
			<br />
			<h2>Cliquez ci-dessous pour le réinitialiser</h2>
			<br />
			<PrimaryButton
				label={"Générer de nouveaux produits"}
				className="button"
				onClick={resetMenu}
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

	h1 {
		color: ${theme.colors.greyBlue};
		font-weight: ${theme.fonts.weights.bold};
	}

	h2 {
		font-weight: ${theme.fonts.weights.regular};
	}

	button {
		width: auto;
	}
`;
