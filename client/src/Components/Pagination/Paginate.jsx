import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actionProducts";
import { ButtonPage, Pagination, LabelPage, OutOf } from "./stylePag";

export const Paginate = () => {
  const [numberPag, setNumberPag] = useState(1);
  const totalPages = useSelector((state) => state.products.totalPages);
  const category = useSelector((state) => state.products.category);

  const dispatch = useDispatch();
  const order = useSelector((state) => state.products.order);
  const nameProduct = useSelector((state) => state.products.nameProduct);

  useEffect(() => {
    dispatch(getAllProducts(numberPag, category, order, nameProduct));
  }, [numberPag]);

  useEffect(() => {
    if (totalPages === 0) {
      return;
    }
    if (totalPages <= numberPag) {
      setNumberPag(totalPages);
    }
  }, [totalPages]);

  return (
    <Pagination>
      <ButtonPage left={"1px solid #2b2929"} radius={"3px 0px 0px 3px"} l={true} onClick={() => setNumberPag(numberPag - 1)} disabled={numberPag <= 1}>
        {"<"} &nbsp;&nbsp;Prev
      </ButtonPage>
      {totalPages < 1 ? null : (
        <>
          <LabelPage decoration={"underline"} border={"1px solid #2b2929;"}> {numberPag} </LabelPage>
		  <OutOf border={"1px solid #2b2929;"}>out of</OutOf>
          <LabelPage border={"1px solid #2b2929;"} > {totalPages}</LabelPage>
        </>
      )}
      <ButtonPage right={"1px solid #2b2929"} radius={"0px 3px 3px 0px"} r={true} onClick={() => setNumberPag(numberPag + 1)} disabled={numberPag >= totalPages}>
          Next&nbsp;&nbsp; {" >"}
      </ButtonPage>
    </Pagination>
  );
};
