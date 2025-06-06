import { useContext, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import Button from "../../../../../reusable-ui/Button";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";

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

	return (
		<AddFormStyles action="submit" onSubmit={handleSubmit}>
			<ImagePreview
				className="image-preview"
				imageSource={newProduct.imageSource}
				title={newProduct.title}
			/>

			<div className="input-fields">
				<TextInput
					type="text"
					name="title"
					value={newProduct.title}
					onChange={handleChange}
					Icon={<FaHamburger />}
					className="add-product-input"
					placeholder={"Nom du produit (ex: Super Burger)"}
					version="minimalist"
				/>
				<TextInput
					type="url"
					name="imageSource"
					value={newProduct.imageSource}
					onChange={handleChange}
					Icon={<BsFillCameraFill />}
					className="add-product-input"
					placeholder={
						"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
					}
					version="minimalist"
				/>
				<TextInput
					type="text"
					name="price"
					value={newProduct.price ? newProduct.price : ""}
					onChange={handleChange}
					Icon={<MdOutlineEuro />}
					className="add-product-input"
					placeholder={"Prix"}
					version="minimalist"
				/>
			</div>

			<div className="button-with-message">
				<Button
					label={"Ajouter un nouveau produit au menu"}
					className={"add-product-button"}
					version="success"
				/>
				{isSubmitted && (
					<div className="successMessage">
						<FiCheckCircle className="icon" />
						Ajouté avec succès !
					</div>
				)}
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

	.successMessage {
		color: ${theme.colors.success};
		display: flex;
		align-items: center;

		.icon {
			margin-left: 10px;
			margin-right: 5px;
		}
	}
`;
