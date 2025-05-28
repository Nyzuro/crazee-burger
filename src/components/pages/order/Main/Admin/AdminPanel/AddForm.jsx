import { useContext, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import TextInput from "../../../../../reusable-ui/TextInput";

export default function AddForm({ newProduct, setNewProduct }) {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { handleAdd } = useContext(OrderContext);

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

		setNewProduct({
			title: "",
			imageSource: "",
			price: 0,
		});
	};

	return (
		<AddFormStyled action="submit" className="product-info" onSubmit={handleSubmit}>
			<TextInput
				type="text"
				name="title"
				value={newProduct.title}
				onChange={handleChange}
				Icon={<FaHamburger className="icon" />}
				className="add-product-input"
				placeholder={"Nom du produit (ex: Super Burger)"}
			/>

			<TextInput
				type="url"
				name="imageSource"
				value={newProduct.imageSource}
				onChange={handleChange}
				Icon={<BsFillCameraFill className="icon" />}
				className="add-product-input"
				placeholder={
					"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
				}
			/>

			<TextInput
				type="text"
				name="price"
				value={newProduct.price ? newProduct.price : ""}
				onChange={handleChange}
				Icon={<MdOutlineEuro className="icon" />}
				className="add-product-input"
				placeholder={"Prix"}
			/>

			<div className="button-with-message">
				<PrimaryButton
					label={"Ajouter un nouveau produit au menu"}
					className={"add-product-button"}
				/>
				{isSubmitted && (
					<div className="successMessage">
						<FiCheckCircle />
						Ajouté avec succès !
					</div>
				)}
			</div>
		</AddFormStyled>
	);
}

const AddFormStyled = styled.form`
	.add-product-input {
		background-color: ${theme.colors.background_white};

		margin: 0px 0px 8px 0px;
		padding: 8px 16px 8px 24px;
		gap: 13px;

		.icon {
			color: ${theme.colors.greyBlue};
			font-size: ${theme.fonts.size.SM};
		}

		input {
			background-color: ${theme.colors.background_white};

			&::placeholder {
				background-color: ${theme.colors.background_white};
			}
		}
	}

	.add-product-button {
		width: auto;
		padding: 10px 29px;
		font-size: 14px;
		background-color: ${theme.colors.success};

		&:hover {
			background-color: ${theme.colors.success};
			color: ${theme.colors.white};
			border: none;
		}

		&:active {
			background-color: ${theme.colors.white};
			color: ${theme.colors.success};
			border: 1px solid ${theme.colors.success};
		}
	}

	.button-with-message {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
	}

	.successMessage {
		color: ${theme.colors.success};
		display: flex;
		align-items: center;
	}
`;
