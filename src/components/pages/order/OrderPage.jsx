import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          <div className="user">
            <h1>Bonjour {username}</h1>
            <Link to={"/"}>
              <button>Deconnexion</button>
            </Link>
          </div>
          <div className="logo">Logo</div>
        </div>
        <div className="main"></div>
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
    background: red;
    height: 95%;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }

  .navbar {
    background: pink;
    height: 10%;
  }

  .user {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .main {
    background: blue;
    flex: 1;
  }
`;
