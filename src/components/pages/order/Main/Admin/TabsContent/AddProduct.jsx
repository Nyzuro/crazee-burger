import styled from "styled-components";
import { theme } from "../../../../../../theme";
import AddForm from "./AddForm";

export default function AddProduct() {
	return (
		<AddProductStyles>
			<div className="preview-image">Aucune image</div>
			<AddForm />
		</AddProductStyles>
	);
}

const AddProductStyles = styled.div`
	width: 70%;
	display: grid;
	grid-template-columns: 215px 1fr;
	gap: 20px;

	.preview-image {
		color: ${theme.colors.greySemiDark};
		border: 1px solid ${theme.colors.greyLight};
		border-radius: ${theme.borderRadius.round};

		width: 215px;
		height: 120px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
