import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import AddForm from "./AddForm";

export default function AddProduct() {
	const { newProduct } = useContext(OrderContext);

	return (
		<AddProductStyles>
			<div className="preview-image">
				{newProduct.imageSource ? (
					<img src={newProduct.imageSource} alt={newProduct.title} />
				) : (
					<div className="empty-image">Aucune Image</div>
				)}
			</div>
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
		width: 215px;
		height: 120px;

		img {
			object-fit: contain;
			width: 100%;
			height: 100%;
		}

		.empty-image {
			width: 100%;
			height: 100%;

			display: flex;
			align-items: center;
			justify-content: center;

			color: ${theme.colors.greySemiDark};
			border: 1px solid ${theme.colors.greyLight};
			border-radius: ${theme.borderRadius.round};
		}
	}
`;
