import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ className, Icon, label, onClick }) {
	return (
		<TabStyled className={className} onClick={onClick}>
			<div className="icon">{Icon}</div>
			{label}
		</TabStyled>
	);
}

const TabStyled = styled.button`
	position: relative;
	left: 5%;
	top: 1px;

	height: 43px;
	padding: 0px 22px;

	border: 1px solid ${theme.colors.greyLight};
	border-bottom: 2px solid ${theme.colors.greyLight};
	border-top-right-radius: ${theme.borderRadius.round};
	border-top-left-radius: ${theme.borderRadius.round};

	color: ${theme.colors.greySemiDark};
	background-color: ${theme.colors.white};
	box-shadow: ${theme.shadows.subtle};
	font-size: ${theme.fonts.size.P0};

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 13px;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
		border-bottom: 2px solid ${theme.colors.white};
	}

	.icon {
		display: flex;
	}
`;
