import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";

export default function Admin() {
	const [activePanel, setActivePanel] = useState("add");
	const [isCollapsed, setIsCollapsed] = useState(false);
	const { isModeAdmin } = useContext(OrderContext);

	return (
		<>
			{isModeAdmin && (
				<AdminStyled>
					<AdminTabs
						isCollapsed={isCollapsed}
						setIsCollapsed={setIsCollapsed}
						activePanel={activePanel}
						setActivePanel={setActivePanel}
					/>

					{!isCollapsed && <AdminPanel activePanel={activePanel} />}
				</AdminStyled>
			)}
		</>
	);
}

const AdminStyled = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;
