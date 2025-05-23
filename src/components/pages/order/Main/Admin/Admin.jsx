import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";

export default function Admin() {
	const { isCollapsed } = useContext(OrderContext);

	return (
		<AdminStyled>
			<AdminTabs />

			{!isCollapsed && <AdminPanel />}
		</AdminStyled>
	);
}

const AdminStyled = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;
