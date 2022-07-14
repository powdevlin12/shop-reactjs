import React from "react";
import styled from "styled-components";

const ModalBuy = () => {
  return (
    <Wrapper>
      <Modal>
        <h2>Do you sure to buy ?</h2>
        <div className="buy__choose">
          <Button>Okey</Button>
          <Button className="buy__choose--no">No, Thanks</Button>
        </div>
      </Modal>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #617d98a1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  /* border-radius: 6px; */
  font-size: 16px;
  color: green;
  border-top: 1px solid #80808094;
  border-right: 1px solid #80808094;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  &.buy__choose--no {
    background-color: white;
    color: red;
    border-right: none;
  }
  &:hover
  {
    background-color : #80808094;
  }
`;
const Modal = styled.div`
  width: 420px;
  height: 180px;
  background-color: white;
  position: relative;
  h2 {
    font-size: 26px;
    text-align: center;
    padding: 20px;
    color: gray;
    font-weight: 100;
  }
  .buy__choose {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 74px;
    align-items: center;
  }
`;
export default ModalBuy;
