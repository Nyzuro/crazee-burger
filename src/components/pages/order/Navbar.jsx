import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="logo">Logo</div>
      <div className="user">
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

  .user {
    background-color: purple;
  }

  .logo {
    background-color: red;
  }
`;
