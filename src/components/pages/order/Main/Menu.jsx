import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((products) => {
        return (
          <div className="products">
            {/* <div className="images">
              <img src={products.imageSource} alt={products.title} />
            </div> */}
            <div className="info-text">{products.title}</div>
          </div>
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;

  /* .images {
    width: 200px;
    height: 145px;
    img {
      width: 100%;
      height: 100%;
    }
  } */

  .products {
    background-color: ${theme.colors.white};
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    width: 240px;
    height: 330px;
  }
`;
