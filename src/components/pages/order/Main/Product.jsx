import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Product({ imageSource, title, price }) {
  return (
    <ProductStyled>
      <div className="product">
        <div className="image">
          <img src={imageSource} alt={title} />
        </div>
        <div className="info-text">
          <div className="title">{title}</div>
          <div className="description">
            <div className="price">{price}</div>
            <button className="add-button">Ajouter</button>
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
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

    .info-text {
      border: 1px solid red;
    }

    .title {
      border: 1px solid black;
    }

    .description {
      border: 1px solid black;
    }
  }
`;
