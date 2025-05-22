import { useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
	const [isModeAdmin, setIsModeAdmin] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isAddSelected, setIsAddSelected] = useState(true);
	const [isEditSelected, setIsEditSelected] = useState(false);
	const [currentTabSelected, setCurrentTabSelected] = useState("add");
	const [menu, setMenu] = useState(fakeMenu2);

	const orderContextValue = {
		isModeAdmin,
		setIsModeAdmin,
		menu,
		isModeAdmin,
		isCollapsed,
		setIsCollapsed,
		isAddSelected,
		setIsAddSelected,
		isEditSelected,
		setIsEditSelected,
		setIsModeAdmin,
		currentTabSelected,
		setCurrentTabSelected,
	};

	return (
		<OrderPageStyled>
			<div className="container">
				<OrderContext.Provider value={orderContextValue}>
					<Navbar />
					<Main />
				</OrderContext.Provider>
			</div>
		</OrderPageStyled>
	);
}

const OrderPageStyled = styled.div`
	background: ${theme.colors.primary};
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	.container {
		height: 95%;
		width: 1400px;
		display: flex;
		flex-direction: column;
	}
`;
