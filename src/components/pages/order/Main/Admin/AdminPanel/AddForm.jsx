import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import Button from "../../../../../reusable-ui/Button";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputsConfig } from "./InputsConfig";
import SubmitMessage from "./SubmitMessage";

export const EMPTY_PRODUCT = {
	id: "",
	title: "",
	imageSource: "",
	price: 0,
};

export default function AddForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewProduct({ ...newProduct, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newProductToAdd = {
			...newProduct,
			id: crypto.randomUUID(),
		};
		handleAdd(newProductToAdd);

		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
		}, 2000);

		setNewProduct(EMPTY_PRODUCT);
	};

	const inputs = getInputsConfig(newProduct);

	return (
		<AddFormStyles action="submit" onSubmit={handleSubmit}>
			<ImagePreview
				className="image-preview"
				imageSource={newProduct.imageSource}
				title={newProduct.title}
			/>

			<div className="input-fields">
				{inputs.map((input) => {
					return (
						<TextInput
							key={input.id}
							{...input}
							version="minimalist"
							onChange={handleChange}
						/>
					);
				})}
			</div>

			<div className="button-with-message">
				<Button
					label={"Ajouter un nouveau produit au menu"}
					className={"add-product-button"}
					version="success"
				/>
				{isSubmitted && <SubmitMessage />}
			</div>
		</AddFormStyles>
	);
}

const AddFormStyles = styled.form`
	width: 70%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 3fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 8px;

	.input-fields {
		display: grid;
		grid-area: 1 / 2 / 2 / 3;
		grid-row-gap: 8px;
	}

	.button-with-message {
		grid-area: 2 / 2 / 3 / 3;
		height: fit-content;
		display: flex;
		align-items: center;
		gap: 5px;
	}
`;
