import React, { useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import ModalBuy from "./ModalBuy";

const CartTotals = () => {
  const { total_amount, shipping } = useCartContext();
  console.log(total_amount, shipping);
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <Wrapper>
      <ModalBuy isShowModal={isShowModal} setIsShowModal={setIsShowModal} />

      <div>
        <article>
          <h5>
            subtotals : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(total_amount + shipping)}</span>
          </h4>
        </article>
        <button className="btn" onClick={()=>setIsShowModal(true)}>
          Buy
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
