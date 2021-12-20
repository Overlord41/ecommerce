import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { ButtonDetail } from "../../common/Btn/BtnStyled";
import { blue, lightBlue } from "../../bankStyles/variables";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/actionProducts";
import { addToCart } from "../../redux/actions/actionCart";
import styled from "styled-components";

import { Toaster, toast } from "react-hot-toast";

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #b5b4b832;

  @media screen and (max-width: 900px) {
    background-color: white;
  }
`;
const Container = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 20px;
  width: 100%;
  max-width: 950px;

  background-color: white;
  border-radius: 20px;

  display: grid;
  gap: 2rem;
  grid-template-columns: 55% 45%;
  grid-template-rows: repeat(auto, 4);
  grid-template-areas:
    "image info"
    "image info"
    "description description"
    "rating rating";

  @media screen and (max-width: 900px) {
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 0;
    border-radius: 0%;
    width: 98%;
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
    object-fit: contain;
    width: 420px;
    height: 370px;
  }
`;
const ProductInfo = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  margin-right: 15px;

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
  const product = useSelector((state) => state.products.productDetail);
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, []);
  const productComplete = {
    ...product,
    comments: [
      {
        content:
          "This is a comment. This comment is supposed to be longer than one line. Just for testing.",
        stars: 5,
      },
      {
        content:
          "This is another comment. This comment is supposed to be longer than one line. Just for testing.",
        stars: 3,
      }, // cuando traiga el producto, me va a llegar con los comentarios que le corresponden
      {
        content:
          "This product is great... This comment is supposed to be longer than one line. Just for testing.",
        stars: 1,
      },
    ],
  };
  const { img, description, comments, name, salePrice, rating } =
    productComplete;

  const addCart = () => {
    dispatch(addToCart(id));
    toast.success("Added Product");
  };
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
          <ButtonDetail backgroundColor={blue} width={"99%"}>
            Buy now
          </ButtonDetail>
          <ButtonDetail
            backgroundColor={lightBlue}
            color={blue}
            onClick={addCart}
            width={"99%"}
          >
            Add to cart
          </ButtonDetail>
          <Link to={`/update/${id}`}>
            <ButtonDetail backgroundColor={blue} width={"99%"}>
              Edit
            </ButtonDetail>
          </Link>
        </ProductInfo>
        <ProductDescription>
          <h1>Description</h1>
          <p>{description}</p>
        </ProductDescription>
        <ProductRating>
          <h1>Rating</h1>
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
      <Toaster />
    </Wrapper>
  );
};

export default ProductDetail;
