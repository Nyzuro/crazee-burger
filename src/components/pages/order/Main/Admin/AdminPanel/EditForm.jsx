import { useContext, useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputsConfig } from "./InputsConfig";

export default function EditForm() {
	const { cardClicked, menu, setMenu } = useContext(OrderContext);

	const getProductInfo = (id) => {
		return menu.filter((product) => product.id === id)[0];
	};

	const [productInfo, setProductInfo] = useState(getProductInfo(cardClicked));

	const handleChange = (event) => {
		const { name, value } = event.target;

		const updatedProduct = {
			...productInfo,
			[name]: value,
		};

		setProductInfo(updatedProduct);

		setMenu((menu) =>
			menu.map((product) =>
				product.id === updatedProduct.id ? { ...updatedProduct } : product
			)
		);
	};

	const inputs = getInputsConfig(productInfo);

	return (
		<EditFormStyled>
			<ImagePreview
				className="image-preview"
				imageSource={productInfo.imageSource}
				title={productInfo.title}
			/>

			<div className="input-fields">
				{cardClicked ? (
					inputs.map((input) => {
						return (
							<TextInput
								key={input.id}
								{...input}
								value={productInfo[input.name]}
								version="minimalist"
								onChange={handleChange}
							/>
						);
					})
				) : (
					<div>
						"Cliquer sur un produit du menu pour le modifier"
						<HiCursorClick />
					</div>
				)}
			</div>
		</EditFormStyled>
	);
}

const EditFormStyled = styled.form`
	font-family: "Amatic SC", sans-serif;
	font-size: ${theme.fonts.size.P3};
	font-weight: ${theme.fonts.weights.light};
	color: ${theme.colors.greyDark};

	display: flex;
	align-items: center;
	gap: 9px;
	padding-top: 50px;
`;
