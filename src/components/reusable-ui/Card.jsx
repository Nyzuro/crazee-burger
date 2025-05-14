import styled from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";

export default function Card({ imageSource, title, leftDescription }) {
	return (
		<CardStyled>
			<div className="image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="info-text">
				<div className="title">{title}</div>
				<div className="description">
					<div className="left-description">{leftDescription}</div>
					<PrimaryButton className="add-button" label={"Ajouter"} />
				</div>
			</div>
		</CardStyled>
	);
}

const CardStyled = styled.div`
	background-color: ${theme.colors.white};
	box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
	width: 200px;
	height: 300px;
	padding: ${theme.spacing.md};
	padding-bottom: 10px;
	display: grid;
	grid-template-rows: 65% 1fr;
	border-radius: ${theme.borderRadius.extraRound};

	.image {
		width: 100%;
		height: auto;
		margin-top: 30px;
		margin-bottom: ${theme.spacing.md};

		img {
			object-fit: contain;
			width: 100%;
			height: 100%;
		}
	}

	.info-text {
		display: grid;
		grid-template-rows: 40% 60%;
		padding: 5px;

		.title {
			color: #17161a;
			font-family: "Amatic SC", sans-serif;
			font-size: ${theme.fonts.size.P4};
			font-weight: ${theme.fonts.weights.bold};

			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.description {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
			color: #ffa01b;

			.add-button {
				padding: ${theme.spacing.sm};
				font-size: 11px;
			}
		}
	}
`;
