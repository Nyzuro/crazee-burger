import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className }) {
  return (
    <LogoStyled className={className}>
      <h1>CRAZEE</h1>
      <img src="/images/logo-orange.png" alt="logo-crazee-burger" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-family: "Amatic SC", sans-serif;
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.primary};
    display: inline;
    text-align: center;
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;
