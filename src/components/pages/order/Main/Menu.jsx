import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
	const { menu } = useContext(OrderContext);

	return (
		<MenuStyled>
			{menu.map(({ id, title, imageSource, price }) => {
				return (
					<Card
						key={id}
						imageSource={imageSource}
						title={title}
						leftDescription={formatPrice(price)}
					/>
				);
			})}
		</MenuStyled>
	);
}

const MenuStyled = styled.div`
	background: ${theme.colors.background_white};
	box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-row-gap: 60px;
	padding: 50px 50px 150px;
	justify-items: center;
	overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;
