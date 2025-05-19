import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
	const { username } = useParams();
	const [isModeAdmin, setIsModeAdmin] = useState(false);

	const orderContextValue = {
		isModeAdmin,
		setIsModeAdmin,
	};

	return (
		<OrderPageStyled>
			<div className="container">
				<OrderContext.Provider value={orderContextValue}>
					<Navbar username={username} />
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
