import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Product({ imageSource, title, price }) {
	return (
		<ProductStyled>
			<div className="image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="info-text">
				<div className="title">{title}</div>
				<div className="description">
					<div className="price">{price}</div>
					<button className="add-button">Ajouter</button>
				</div>
			</div>
		</ProductStyled>
	);
}

const ProductStyled = styled.div`
	background-color: ${theme.colors.white};
	box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
	width: 200px;
	height: 300px;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 65% 1fr;
	padding: 20px;
	padding-bottom: 10px;

	.image {
		border: 1px solid blue;
		margin-top: 30px;
		img {
			object-fit: contain;
			width: 100%;
			height: 100%;
		}
	}

	.info-text {
		border: 1px solid red;
	}

	.title {
		border: 1px solid black;
	}

	.description {
		border: 1px solid black;
	}
`;
