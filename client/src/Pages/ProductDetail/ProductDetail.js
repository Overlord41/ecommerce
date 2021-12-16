import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { ButtonDetail } from "../../common/Btn/BtnStyled";
import { blue, lightBlue } from "../../bankStyles/variables";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../actions";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 80%;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 40px;

  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 4);
  grid-template-areas:
    "image info"
    "image info"
    "description description"
    "rating rating";

  @media screen and (max-width: 800px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto, 4);
    grid-template-areas:
      "image"
      "info"
      "description"
      "rating";
  }
`;

const ProductImage = styled.div`
  grid-area: image;
  display: flex;
  align-content: center;
  justify-content: center;

  img {
    width: 350px;
    height: 350px;
  }
`;
const ProductInfo = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 20px;
    color: #feb236;
  }

  div {
    font-size: 25px;
    margin-bottom: 30px;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    margin-bottom: 25px;

    img {
      width: 65px;
      height: 65px;
    }
  }
`;
const ProductDescription = styled.div`
  grid-area: description;
  font-size: 15px;
  max-width: 1300px;

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
const ProductRating = styled.div`
  grid-area: rating;
  font-size: 15px;

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 15px;
    svg {
      color: #feb236;
    }
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetail);
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, []);
  const productComplete = {
    ...product,
    comments: [
      { content: "This is a comment.", stars: 5 },
      { content: "This is another comment.", stars: 3 }, // cuando traiga el producto, me va a llegar con los comentarios que le corresponden
      { content: "This product is great...", stars: 1 },
    ],
  };
  const { img, description, comments, name, salePrice, rating } =
    productComplete;
  return (
    <Wrapper>
      <Container>
        <ProductImage>
          <img src={img ? img[0] : null} alt="img not fund" />
        </ProductImage>
        <ProductInfo>
          <h1>{name}</h1>
          <p>
            {rating
              ? Array(Math.round(rating)).fill(<StarIcon fontSize="40px" />, 0)
              : null}
          </p>
          <div>${salePrice}</div>
          <span>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
          </span>
          <ButtonDetail backgroundColor={blue}>Buy now</ButtonDetail>
          <ButtonDetail backgroundColor={lightBlue} color={blue}>
            Add to cart
          </ButtonDetail>
          <Link to={`/update/${id}`}>
            <ButtonDetail backgroundColor={blue}>Edit</ButtonDetail>
          </Link>
        </ProductInfo>
        <ProductDescription>
          <h1>Product description</h1>
          <p>{description}</p>
        </ProductDescription>
        <ProductRating>
          <h1>Product rating</h1>
          {comments.map((comment, index) => (
            <div key={index}>
              {Array(Math.round(comment.stars)).fill(
                <StarIcon color="yellow" />,
                0
              )}
              <p>{comment.content}</p>
            </div>
          ))}
        </ProductRating>
      </Container>
    </Wrapper>
  );
};

export default ProductDetail;
