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
	box-shadow: ${theme.shadows.strong};
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-row-gap: 60px;
	padding: 50px 50px 150px;
	justify-items: center;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
