import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">Left Side</div>
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: pink;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side {
    background-color: red;
  }
`;
