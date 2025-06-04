import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
	value,
	onChange,
	Icon,
	className,
	type,
	version,
	...extraProps
}) {
	return (
		<TextInputStyled className={className} version={version}>
			{Icon && <div className="icon">{Icon}</div>}
			<input type={type} value={value} onChange={onChange} {...extraProps} />
		</TextInputStyled>
	);
}

const TextInputStyled = styled.div`
	border-radius: ${theme.borderRadius.round};
	display: flex;
	align-items: center;

	.icon {
		font-size: ${theme.fonts.size.SM};
		margin-right: 13px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	input {
		border: none;
		font-size: ${theme.fonts.size.SM};
		color: ${theme.colors.dark};
		width: 100%;

		&::placeholder {
			color: ${theme.colors.greyMedium};
		}

		&:focus-visible {
			outline: none;
		}
	}

	${(props) => {
		if (props.version === "normal") return extraStyleNormal;
		if (props.version === "minimalist") return extraStyleMinimalist;
	}}
`;

const extraStyleNormal = css`
	background-color: ${theme.colors.white};
	margin: 18px 0px;
	padding: 18px 28px 18px 36px;

	.icon {
		color: ${theme.colors.greySemiDark};
	}

	input {
		&::placeholder {
			background: ${theme.colors.white};
		}
	}
`;

const extraStyleMinimalist = css`
	background-color: ${theme.colors.background_white};
	margin: 0px 0px 8px 0px;
	padding: 8px 16px 8px 24px;

	.icon {
		color: ${theme.colors.greyBlue};
	}

	input {
		background-color: ${theme.colors.background_white};

		&::placeholder {
			background-color: ${theme.colors.background_white};
		}
	}
`;
