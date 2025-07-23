import { useRef, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme";
import { deepClone } from "../../../utils/array";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
	const [isModeAdmin, setIsModeAdmin] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [currentTabSelected, setCurrentTabSelected] = useState("add");
	const [menu, setMenu] = useState(fakeMenu.LARGE);
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
	const [cardClicked, setCardClicked] = useState(null);
	const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
	const titleInputRef = useRef(null);

	const handleAdd = (newProduct) => {
		const menuCopy = deepClone(menu);

		const updatedMenu = [newProduct, ...menuCopy];

		setMenu(updatedMenu);
	};

	const handleDelete = (productId) => {
		const menuCopy = deepClone(menu);

		const updatedMenu = menuCopy.filter((product) => product.id !== productId);

		setMenu(updatedMenu);
	};

	const handleEdit = (updatedProduct) => {
		const menuCopy = deepClone(menu);

		const indexOfUpdatedProduct = menu.findIndex(
			(menuProduct) => menuProduct.id === updatedProduct.id
		);
		menuCopy[indexOfUpdatedProduct] = updatedProduct;

		setMenu(menuCopy);
	};

	const resetMenu = () => {
		setMenu(fakeMenu.SMALL);
	};

	const selectTab = (tabSelected) => {
		setIsCollapsed(false);
		setCurrentTabSelected(tabSelected);
	};

	const orderContextValue = {
		isModeAdmin,
		setIsModeAdmin,
		menu,
		setMenu,
		isCollapsed,
		setIsCollapsed,
		currentTabSelected,
		setCurrentTabSelected,
		handleAdd,
		handleDelete,
		resetMenu,
		newProduct,
		setNewProduct,
		selectTab,
		cardClicked,
		setCardClicked,
		titleInputRef,
		productSelected,
		setProductSelected,
		handleEdit,
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
