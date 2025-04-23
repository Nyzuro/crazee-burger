import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/public/images/F03 logo-orange.png" alt="logo-crazee-burger" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-family: "Amatic SC", sans-serif;
    font-weight: 700;
    color: #ffa01b;
    display: inline;
    text-align: center;
    font-size: 90px;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 150px;
    width: 170px;
    margin: 0 5px;
  }
`;
