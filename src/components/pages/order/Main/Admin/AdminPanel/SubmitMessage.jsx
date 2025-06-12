import { FiCheckCircle } from "react-icons/fi";
import { theme } from "../../../../../../theme";
import styled from "styled-components";

export default function SubmitMessage() {
	return (
		<SubmitMessageStyled className="successMessage">
			<FiCheckCircle className="icon" />
			Ajouté avec succès !
		</SubmitMessageStyled>
	);
}

const SubmitMessageStyled = styled.div`
	color: ${theme.colors.success};
	display: flex;
	align-items: center;

	.icon {
		margin-left: 10px;
		margin-right: 5px;
	}
`;
