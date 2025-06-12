import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({ label, Icon, className, onClick, version }) {
	return (
		<ButtonStyled className={className} onClick={onClick} version={version}>
			<span>{label}</span>
			{Icon && <div className="icon">{Icon}</div>}
		</ButtonStyled>
	);
}

const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	border-radius: 5px;
	border-width: 0;
	color: ${theme.colors.white};

	.icon {
		margin-left: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
	width: 100%;
	font-size: 15px;
	padding: 18px 24px;
	background-color: #ff9f1b;

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

const extraStyleSuccess = css`
	width: auto;
	padding: 10px 29px;
	font-size: 14px;
	background-color: ${theme.colors.success};
	border: 1px solid ${theme.colors.success};

	&:hover {
		background-color: ${theme.colors.white};
		color: ${theme.colors.success};
		border: 1px solid ${theme.colors.success};
		transition: all 200ms ease-out;
	}
	&:active {
		background-color: ${theme.colors.success};
		color: ${theme.colors.white};
		border: 1px solid ${theme.colors.success};
	}
`;

const extraStyle = {
	primary: extraStyleNormal,
	success: extraStyleSuccess,
};
