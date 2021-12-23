import React from "react";
import { useSelector } from "react-redux";
import { CardsContainer, ContainerDisplay } from "./styled";

//components
import Card from "../../Components/card/card.jsx";
import Navbar from "../../common/navbar/navbar.jsx";
import Footer from "../../common/footer/footer.jsx";
import { Paginate } from "../../Components/pagination/pagination.jsx";
import { SideBarFilters } from "../../common/sidebar/sidebar.jsx";

// import Login from "../Login/Login";

const Home = () => {
  const allProducts = useSelector((state) => state.products.allProducts);

  return (
    <>
      <Navbar />
      <ContainerDisplay>
        <SideBarFilters />
        <CardsContainer>
          {allProducts?.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </CardsContainer>
      </ContainerDisplay>

      <Paginate />

      <Footer />
    </>
  );
};

export default Home;
