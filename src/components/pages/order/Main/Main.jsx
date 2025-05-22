import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import Admin from "./Admin/Admin";
import Menu from "./Menu";

export default function Main() {
	const { isModeAdmin } = useContext(OrderContext);

	return (
		<MainStyled>
			{/* <div className="basket">Basket</div> */}
			<div className="menu-and-admin">
				{isModeAdmin && <Admin className="admin" />}
				<Menu />
			</div>
		</MainStyled>
	);
}

const MainStyled = styled.div`
	background: blue;
	flex: 1;
	background-color: ${theme.colors.background_white};
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
	box-shadow: ${theme.shadows.strong};
	height: calc(95vh - 10vh);

	display: grid;
	grid-template-columns: 1fr;

	.basket {
		background-color: pink;
	}

	.menu-and-admin {
		position: relative;
		overflow-y: hidden;
		display: grid;
		border-bottom-left-radius: ${theme.borderRadius.extraRound};
		border-bottom-right-radius: ${theme.borderRadius.extraRound};

		.admin {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
		}
	}
`;
