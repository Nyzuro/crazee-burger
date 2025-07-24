import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import TextInput from "../../../../../reusable-ui/TextInput";
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

	return (
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
							ref={input.name === "title" ? titleInputRef : null}
							{...input}
							version="minimalist"
							onChange={handleChange}
						/>
					);
				})}
			</div>

			<div className="submit">
				<span className="sentence">
					Cliquer sur un produit du menu pour le modifier{" "}
					<span className="live-update">en temps réel</span>
				</span>
			</div>
		</EditFormStyled>
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

	.submit {
		grid-area: 2 / 2 / -2 / 3;
		display: flex;
		align-items: center;
		position: relative;
		top: 3px;

		.sentence {
			color: ${theme.colors.primary};
			font-size: ${theme.fonts.size.SM};
			.live-update {
				text-decoration: underline;
			}
		}
	}
`;
