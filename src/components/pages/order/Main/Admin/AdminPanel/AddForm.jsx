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

export default function AddForm({ formData, setFormData }) {
	const [isSubmittedForm, setIsSubmittedForm] = useState(false);

	const { handleAdd } = useContext(OrderContext);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const newProduct = {
		imageSource: formData.image,
		title: formData.name,
		price: formData.price,
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleAdd(newProduct);

		setIsSubmittedForm(true);

		setTimeout(() => {
			setIsSubmittedForm(false);
		}, 2000);

		setFormData({
			name: "",
			image: "",
			price: "",
		});
	};

	return (
		<AddFormStyled action="submit" className="product-info" onSubmit={handleSubmit}>
			<TextInput
				type="text"
				name="name"
				value={formData.name}
				onChange={handleInputChange}
				Icon={<FaHamburger className="icon" />}
				className="add-product-input"
				placeholder={"Nom du produit (ex: Super Burger)"}
			/>

			<TextInput
				type="url"
				name="image"
				value={formData.image}
				onChange={handleInputChange}
				Icon={<BsFillCameraFill className="icon" />}
				className="add-product-input"
				placeholder={
					"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
				}
			/>

			<TextInput
				type="text"
				name="price"
				value={formData.price}
				onChange={handleInputChange}
				Icon={<MdOutlineEuro className="icon" />}
				className="add-product-input"
				placeholder={"Prix"}
			/>

			<div className="button-with-message">
				<PrimaryButton
					label={"Ajouter un nouveau produit au menu"}
					className={"add-product-button"}
				/>
				{isSubmittedForm && (
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
