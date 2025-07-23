import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import HintMessage from "./HintMessage";
import ImagePreview from "./ImagePreview";
import { getInputsConfig } from "./InputsConfig";

export default function EditForm() {
	const {
		cardClicked,
		productSelected,
		handleEdit,
		titleInputRef,
		setProductSelected,
	} = useContext(OrderContext);

	const inputs = cardClicked && getInputsConfig(productSelected);

	const handleChange = (event) => {
		const { name, value } = event.target;

		const updatedProduct = {
			...productSelected,
			[name]: value,
		};

		setProductSelected(updatedProduct);

		handleEdit(updatedProduct);
	};

	return cardClicked ? (
		<EditFormStyled>
			<ImagePreview
				className="image-preview"
				imageSource={productSelected.imageSource}
				title={productSelected.title}
			/>

			<div className="input-fields">
				{inputs.map((input) => {
					return (
						<TextInput
							key={input.id}
							ref={input.id === 1 ? titleInputRef : null}
							{...input}
							value={productSelected[input.name]}
							version="minimalist"
							onChange={handleChange}
						/>
					);
				})}
			</div>
		</EditFormStyled>
	) : (
		<HintMessage />
	);
}

const EditFormStyled = styled.form`
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
`;
