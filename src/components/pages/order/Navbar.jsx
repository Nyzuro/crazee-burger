import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">Left Side</div>
      <div className="right-side">
        <h1>Bonjour {username}</h1>
        <Link to={"/"}>
          <button>Deconnexion</button>
        </Link>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: pink;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-side {
    background-color: purple;
  }

  .left-side {
    background-color: red;
  }
`;
