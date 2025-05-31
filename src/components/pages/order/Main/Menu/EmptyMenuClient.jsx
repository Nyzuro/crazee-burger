import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuClient() {
	return (
		<EmptyMenuClientStyled>
			<h1>Victime de notre succès ! :D</h1>
			<br />
			<h2>De nouvelles recettes sont en cours de préparation.</h2>
			<br />
			<h2>À très vite !</h2>
		</EmptyMenuClientStyled>
	);
}

const EmptyMenuClientStyled = styled.div`
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
`;
