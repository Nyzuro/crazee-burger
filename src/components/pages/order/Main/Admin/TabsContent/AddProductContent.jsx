import { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import TextInput from "../../../../../reusable-ui/TextInput";

export default function AddProductContent() {
	const [prouctInputValue, setProuctInputValue] = useState("");
	const [imageInputValue, setImageInputValue] = useState("");
	const [priceInputValue, setPriceInputValue] = useState("");

	return (
		<AddProductContentStyles>
			<div className="image">Aucune image</div>
			<form action="submit" className="product-form">
				<TextInput
					value={prouctInputValue}
					onChange={(event) => {
						setProuctInputValue(event.target.value);
					}}
					Icon={<FaHamburger />}
					className="input"
					placeholder={"Nom du produit (ex: Super Burger)"}
				/>

				<TextInput
					value={imageInputValue}
					onChange={(event) => {
						setImageInputValue(event.target.value);
					}}
					Icon={<BsFillCameraFill />}
					className="input"
					placeholder={
						"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
					}
				/>

				<TextInput
					value={priceInputValue}
					onChange={(event) => {
						setPriceInputValue(event.target.value);
					}}
					Icon={<MdOutlineEuro />}
					className="input"
					placeholder={"Prix"}
				/>

				<PrimaryButton
					label={"Ajouter un nouveau produit au menu"}
					className={"add-product-button"}
				/>
			</form>
		</AddProductContentStyles>
	);
}

const AddProductContentStyles = styled.div`
	border: 1px solid red;
	width: 70%;
	display: grid;
	grid-template-columns: 215px 1fr;

	.image {
		border: 1px solid blue;
		width: 215px;
		height: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.product-form {
		border: 1px solid green;
		/* width: 100%; */
	}

	.input {
		background-color: grey;
		margin: 0px 0px 8px 0px;
	}

	.add-product-button {
		width: auto;
		padding: 10px 29px;
		font-size: 14px;
		display: flex;
	}
`;
