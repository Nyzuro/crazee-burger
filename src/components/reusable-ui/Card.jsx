import { TiDelete } from "react-icons/ti";
import styled, { css } from "styled-components";
import { theme } from "../../theme";
import Button from "./Button";

export default function Card({
	imageSource,
	title,
	leftDescription,
	hasDeleteButton,
	handleDelete,
	onClick,
	version,
	isHoverable,
}) {
	return (
		<CardStyled onClick={onClick} version={version} isHoverable={isHoverable}>
			<div className="card">
				{hasDeleteButton && (
					<button
						className="delete-button"
						aria-label="delete-button"
						onClick={handleDelete}
					>
						<TiDelete className="icon" />
					</button>
				)}
				<div className="image">
					<img src={imageSource} alt={title} />
				</div>
				<div className="info-text">
					<div className="title">{title}</div>
					<div className="description">
						<div className="left-description">{leftDescription}</div>
						<Button
							className="add-button"
							label={"Ajouter"}
							version="primary"
						/>
					</div>
				</div>
			</div>
		</CardStyled>
	);
}

const CardStyled = styled.div`
	${(props) => props.isHoverable && hoverableStyle}
	border-radius: ${theme.borderRadius.extraRound};
	border: 1px solid red;

	.card {
		box-shadow: ${theme.shadows.medium};
		box-sizing: border-box;
		width: 240px;
		height: 330px;
		padding: ${theme.spacing.md};
		padding-bottom: 10px;
		display: grid;
		grid-template-rows: 65% 1fr;
		border-radius: ${theme.borderRadius.extraRound};
		position: relative;

		.delete-button {
			position: absolute;
			top: 15px;
			right: 15px;

			cursor: pointer;

			width: 30px;
			height: 30px;
			padding: 0;

			background: none;
			border: none;
			color: ${theme.colors.primary};

			display: flex;
			align-items: center;
			justify-content: center;

			.icon {
				height: 100%;
				width: 100%;
			}

			:hover {
				color: ${theme.colors.red};
			}
			:active {
				color: ${theme.colors.primary};
			}
		}

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

		.title {
			color: #17161a;
		}

		${({ version }) => extraStyle[version]}
	}
`;

const extraStyleNormal = css`
	background-color: ${theme.colors.white};

	.delete-button {
		color: ${theme.colors.primary};

		:hover {
			color: ${theme.colors.red};
		}
		:active {
			color: ${theme.colors.primary};
		}
	}

	.description {
		color: #ffa01b;
	}
`;

const extraStyleSelected = css`
	background-color: ${theme.colors.primary};

	.delete-button {
		color: ${theme.colors.white};

		:hover {
			color: ${theme.colors.red};
		}
		:active {
			color: ${theme.colors.white};
		}
	}

	.left-description {
		color: ${theme.colors.white};
	}

	.add-button {
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary};

		&:active {
			background-color: ${theme.colors.primary};
			color: ${theme.colors.white};
			border: 1px solid ${theme.colors.white};
		}
	}
`;

const extraStyle = {
	normal: extraStyleNormal,
	selected: extraStyleSelected,
};

const hoverableStyle = css`
	&:hover {
		border: 1px solid ${theme.colors.primary};
		transform: scale(1.05);
		transition: all 200ms ease-out;
		box-shadow: ${theme.shadows.orangeHighlight};
	}
`;
