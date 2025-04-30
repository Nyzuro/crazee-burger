import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main";
import Navbar from "./Navbar";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
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
