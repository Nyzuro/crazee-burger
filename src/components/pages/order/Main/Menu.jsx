import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Menu() {
	const { menu, isModeAdmin } = useContext(OrderContext);

	return (
		<MenuStyled>
			{menu.map(({ id, title, imageSource, price }) => {
				return (
					<Card
						key={id}
						imageSource={
							imageSource
								? imageSource
								: "../../../../../public/images/coming-soon.png"
						}
						title={title}
						leftDescription={formatPrice(price)}
					/>
				);
			})}

			{menu.length === 0 &&
				(isModeAdmin ? (
					<div className="page-without-product">
						<h1>LE MENU EST VIDE ?</h1>
						<br />
						<h2>Cliquez ci-dessous pour le réinitialiser</h2>
						<br />
						<PrimaryButton
							label={"Générer de nouveaux produits"}
							className="button"
						/>
					</div>
				) : (
					<div className="page-without-product">
						<h1>Victime de notre succès ! :D</h1>
						<br />
						<h2>De nouvelles recettes sont en cours de préparation.</h2>
						<br />
						<h2>À très vite !</h2>
					</div>
				))}
		</MenuStyled>
	);
}

const MenuStyled = styled.div`
	background: ${theme.colors.background_white};
	box-shadow: ${theme.shadows.strong};
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-row-gap: 60px;
	padding: 50px 50px 150px;
	justify-items: center;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}

	.page-without-product {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		font-family: "Amatic SC", sans-serif;
		font-size: ${theme.fonts.size.P4};

		h1 {
			color: ${theme.colors.greyBlue};
			font-weight: ${theme.fonts.weights.bold};
		}

		h2 {
			font-weight: ${theme.fonts.weights.regular};
		}

		button {
			width: auto;
		}
	}
`;
