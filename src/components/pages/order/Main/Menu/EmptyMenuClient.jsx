import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuClient() {
	return (
		<EmptyMenuClientStyled>
			<span className="title">Victime de notre succès ! :D</span>
			<span className="description">
				De nouvelles recettes sont en cours de préparation.
			</span>
			<span className="description">À très vite !</span>
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

	.title {
		color: ${theme.colors.greyBlue};
		font-weight: ${theme.fonts.weights.bold};
	}

	br {
		height: 21px;
		background-color: red;
	}

	.description {
		color: ${theme.colors.greyBlue};
		font-weight: ${theme.fonts.weights.regular};
		margin-top: 20px;
	}
`;
