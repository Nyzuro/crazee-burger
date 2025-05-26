import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import AddForm from "./AddForm";

export default function AddProduct() {
	const [formData, setFormData] = useState({
		name: "",
		image: "",
		price: "",
	});

	return (
		<AddProductStyles>
			<div className="preview-image">
				{formData.image ? (
					<img src={formData.image} alt={formData.name} />
				) : (
					"Aucune image"
				)}
			</div>
			<AddForm formData={formData} setFormData={setFormData} />
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
