import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightSide({ username }) {
	const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

	const toastNotification = () =>
		toast.info("Mode admin activé", {
			theme: "dark",
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	const handleToggle = () => {
		if (isModeAdmin === false) {
			toastNotification();
			setIsModeAdmin(true);
		} else setIsModeAdmin(false);
	};

	return (
		<NavbarRightSideStyled>
			<ToggleButton
				labelIfUnchecked="ACTIVER LE MODE ADMIN"
				labelIfChecked="DÉSACTIVER LE MODE ADMIN"
				onToggle={handleToggle}
			/>
			<ToastAdmin />
			<Profile username={username} />
		</NavbarRightSideStyled>
	);
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	color: ${theme.colors.greyBlue};
	padding-right: 50px;
`;
