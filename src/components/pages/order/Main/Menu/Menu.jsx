import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

export default function Menu() {
	const {
		menu,
		isModeAdmin,
		handleDelete,
		resetMenu,
		cardClicked,
		setCardClicked,
		selectTab,
		titleInputRef,
	} = useContext(OrderContext);

	const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

	const handleClick = (id) => {
		cardClicked === id ? setCardClicked(null) : setCardClicked(id);

		selectTab("edit");

		setTimeout(() => {
			titleInputRef.current?.focus();
		}, 0);
	};

	if (menu.length == 0) {
		return isModeAdmin ? (
			<EmptyMenuAdmin resetMenu={resetMenu} classname="page-without-product" />
		) : (
			<EmptyMenuClient classname="page-without-product" />
		);
	}

	return (
		<MenuStyled>
			{menu.map(({ id, title, imageSource, price }) => {
				return (
					<Card
						className={isModeAdmin && "admin-card"}
						version={
							isModeAdmin
								? cardClicked === id
									? "selected"
									: "normal"
								: "normal"
						}
						key={id}
						imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
						title={title}
						leftDescription={formatPrice(price)}
						hasDeleteButton={isModeAdmin}
						handleDelete={() => handleDelete(id)}
						onClick={() => handleClick(id)}
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
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-row-gap: 60px;
	padding: 50px 50px 150px;
	justify-items: center;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}

	.admin-card:hover {
		border: 1px solid ${theme.colors.primary};
		transform: scale(1.05);
		transition: all 200ms ease-out;
		box-shadow: 0 0 10px ${theme.colors.primary}, ${theme.shadows.medium};
	}
`;
