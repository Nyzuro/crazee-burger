import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="user">
        <h1>Bonjour {username}</h1>
        <Link to={"/"}>
          <button>Deconnexion</button>
        </Link>
      </div>
      <div className="logo">Logo</div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: pink;
  height: 10%;

  .user {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;
