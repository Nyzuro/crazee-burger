import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { theme } from "../../../../theme";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
	const [isAdminMode, setIsAdminMode] = useState(false);

	const toastNotification = () =>
		toast.info("Mode admin activé", {
			// icon: <FaUserSecret size={30} />,
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
		if (isAdminMode === false) {
			toastNotification();
			setIsAdminMode(true);
		} else setIsAdminMode(false);
	};

	return (
		<NavbarRightSideStyled>
			<ToggleButton
				labelIfUnchecked="ACTIVER LE MODE ADMIN"
				labelIfChecked="DÉSACTIVER LE MODE ADMIN"
				onToggle={handleToggle}
			/>
			<Profile username={username} />
			<ToastContainer className="toaster" bodyClassName="body-toast" />
		</NavbarRightSideStyled>
	);
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	color: ${theme.colors.greyBlue};
	padding-right: 50px;

	.toaster {
		max-width: 300px;
	}

	.Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
		background: ${theme.colors.background_dark};
	}

	.body-toast {
		.Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
			margin-right: 20px;
			margin-left: 5px;
		}
		div {
			line-height: 1.3em;
		}
	}
`;
