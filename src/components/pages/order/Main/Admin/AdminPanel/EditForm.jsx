import { useContext } from "react";
import { HiCursorClick } from "react-icons/hi";
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
		menu,
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
			{cardClicked ? (
				<form action="">
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
				</form>
			) : (
				<div>
					"Cliquer sur un produit du menu pour le modifier"
					<HiCursorClick />
				</div>
			)}
		</EditFormStyled>
	);
}

const EditFormStyled = styled.div`
	font-family: "Amatic SC", sans-serif;
	font-size: ${theme.fonts.size.P3};
	font-weight: ${theme.fonts.weights.light};
	color: ${theme.colors.greyDark};

	display: flex;
	align-items: center;
	gap: 9px;
	padding-top: 50px;
`;
