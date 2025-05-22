import styled from "styled-components";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/windows";
import Logo from "../../../reusable-ui/Logo";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar() {
	return (
		<NavbarStyled>
			<Logo className={"logo-order-page"} onClick={() => refreshPage()} />
			<NavbarRightSide />
		</NavbarStyled>
	);
}

const NavbarStyled = styled.nav`
	background: ${theme.colors.white};
	height: 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	border-top-left-radius: ${theme.borderRadius.extraRound};
	border-top-right-radius: ${theme.borderRadius.extraRound};
	border-bottom: 1px solid ${theme.colors.greyLight};

	.logo-order-page {
		cursor: pointer;
	}
`;
