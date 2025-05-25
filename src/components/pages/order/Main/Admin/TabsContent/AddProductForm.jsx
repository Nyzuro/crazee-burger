import { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import TextInput from "../../../../../reusable-ui/TextInput";

export default function AddProductForm() {
	const [prouctInputValue, setProuctInputValue] = useState("");
	const [imageInputValue, setImageInputValue] = useState("");
	const [priceInputValue, setPriceInputValue] = useState("");
	const [isSubmittedForm, setIsSubmittedForm] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		setIsSubmittedForm(true);

		setTimeout(() => {
			setIsSubmittedForm(false);
		}, 2000);
	};

	return (
		<AddProductFormStyles>
			<div className="preview-image">Aucune image</div>
			<form action="submit" className="product-info" onSubmit={handleSubmit}>
				<TextInput
					value={prouctInputValue}
					onChange={(event) => {
						setProuctInputValue(event.target.value);
					}}
					Icon={<FaHamburger className="icon" />}
					className="add-product-input"
					placeholder={"Nom du produit (ex: Super Burger)"}
				/>

				<TextInput
					value={imageInputValue}
					onChange={(event) => {
						setImageInputValue(event.target.value);
					}}
					Icon={<BsFillCameraFill className="icon" />}
					className="add-product-input"
					placeholder={
						"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
					}
				/>

				<TextInput
					value={priceInputValue}
					onChange={(event) => {
						setPriceInputValue(event.target.value);
					}}
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
			</form>
		</AddProductFormStyles>
	);
}

const AddProductFormStyles = styled.div`
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
