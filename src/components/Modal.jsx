import React from "react";
import styled from "styled-components";
import { useState } from "react";
import boxlogo from "../assets/imgs/caixa-de-entrega.png";

const ModalWrapper = styled.div`
  height: 120vh;
  width: 100vw;
  border: 2px solid red;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 300px;
  height: 30vh;
  border-radius:20px;
  background-color: #fff;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
`;
const Button = styled.button`
  margin: 10px 20px;
  padding: 10px 20px;
  border: 1px solid transparent;
  background-color: #2e3575;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
`;

const ButtonBox = styled.div`

`

const Header = styled.div`
width:100%;
height:40px;
background-color:#2e3575;
display:flex;
justify-content:flex-end;
border-radius:20px 20px 0 0;


img{
    width:30px;
    height:30px;
    padding:5px;
}




`;

export const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal ? (
        <ModalWrapper onClick={() => setShowModal(!showModal)}>
          <ModalContainer>
            <Header>
              {" "}
              <img src={boxlogo} alt="" />
            </Header>

            <p>Seu pedido foi efetuado com sucesso</p>
                <ButtonBox>
                          <Button onClick={() => setShowModal(!showModal)}>Sair</Button>
                          </ButtonBox>
          </ModalContainer>
        </ModalWrapper>
      ) : null}
    </>
  );
};
