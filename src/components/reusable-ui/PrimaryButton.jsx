import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, className }) {
	return (
		<PrimaryButtonStyled className={className}>
			<span>{label}</span>
			{Icon && Icon}
		</PrimaryButtonStyled>
	);
}

const PrimaryButtonStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 15px;
	font-weight: 700;
	width: 100%;
	padding: 18px 24px;
	background-color: #ff9f1b;
	border-radius: 5px;
	border-width: 0;
	color: white;

	&:hover {
		color: ${theme.colors.primary};
		background-color: ${theme.colors.white};
		border: 1px solid ${theme.colors.primary};
		transition: all 200ms ease-out;
		cursor: pointer;
	}

	&:active {
		background-color: ${theme.colors.primary};
		color: ${theme.colors.white};
	}
`;
