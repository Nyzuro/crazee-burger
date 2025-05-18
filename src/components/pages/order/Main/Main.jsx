import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminPanel from "./AdminPanel";
import Menu from "./Menu";

export default function Main() {
	return (
		<MainStyled>
			{/* <div className="basket">Basket</div> */}
			<Menu />
			<AdminPanel />
		</MainStyled>
	);
}

const MainStyled = styled.div`
	position: relative;
	background: blue;
	flex: 1;
	background-color: ${theme.colors.background_white};
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
	box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
	overflow: hidden;

	display: flex;
	flex-direction: column;

	/* .basket {
    background-color: purple;
  } */
`;
