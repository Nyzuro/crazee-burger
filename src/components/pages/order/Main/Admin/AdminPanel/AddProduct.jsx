import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import AddForm from "./AddForm";

export default function AddProduct() {
	const EMPTY_PRODUCT = {
		title: "",
		imageSource: "",
		price: 0,
	};

	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

	return (
		<AddProductStyles>
			<div className="preview-image">
				{newProduct.imageSource ? (
					<img src={newProduct.imageSource} alt={newProduct.title} />
				) : (
					<div>Aucune Image</div>
				)}
			</div>
			<AddForm newProduct={newProduct} setNewProduct={setNewProduct} />
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

		display: flex;
		align-items: center;
		justify-content: center;

		width: 215px;
		height: 120px;

		img {
			object-fit: contain;
			width: 100%;
			height: 100%;
		}
	}
`;
