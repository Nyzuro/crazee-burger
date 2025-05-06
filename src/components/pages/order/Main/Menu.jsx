import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((product) => {
        return (
          <div className="product">
            <div className="image">
              <img src={product.imageSource} alt={product.title} />
            </div>
            <div className="info-text">
              <div className="title">{product.title}</div>
              <div className="description">
                <div className="price">{product.price}</div>
                <button className="add-button">Ajouter</button>
              </div>
            </div>
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

  .image {
    border: 1px solid blue;
    width: 100px;
    height: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .product {
    background-color: ${theme.colors.white};
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    width: 240px;
    height: 330px;
  }
`;
