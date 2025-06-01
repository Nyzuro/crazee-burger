import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
	value,
	onChange,
	Icon,
	className,
	type,
	...extraProps
}) {
	return (
		<InputStyled className={className}>
			{Icon && <div className="icon">{Icon}</div>}
			<input type={type} value={value} onChange={onChange} {...extraProps} />
		</InputStyled>
	);
}

const InputStyled = styled.div`
	background-color: ${theme.colors.white};
	margin: 18px 0px;
	padding: 18px 28px 18px 36px;
	border-radius: ${theme.borderRadius.round};
	display: flex;
	align-items: center;

	.icon {
		font-size: ${theme.fonts.size.SM};
		color: ${theme.colors.greySemiDark};
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
			background: ${theme.colors.white};
			color: ${theme.colors.greyMedium};
		}

		&:focus-visible {
			outline: none;
		}
	}
`;
