import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { ModalDelete } from "./ModalDelete";
import { ModalTrailer } from "./ModalTrailer";

export const Content = ({ el, todos, setTodos }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openTrailer, setOpenTrailer] = useState(false);

  const openModalDelete = () => {
    setOpenDelete(!openDelete);
  };

  const trailerMovie = () => {
    setOpenTrailer(true);
  };

  return (
    <GlobalContainerContent>
      <>
        {openDelete &&
          ReactDOM.createPortal(
            <ModalDelete
              openModalDelete={openModalDelete}
              setModalDelete={setOpenDelete}
              todos={todos}
              setTodos={setTodos}
              id={el.id}
            />,
            document.getElementById("modal")
          )}
        <ContainerContent>
          <Img src={el.url} />
          <div>
            <Title>{el.title}</Title>
            <ContainerBtnRating>
              <Rating>{el.rating} / 5 STARS</Rating>
              <ContainerBtn>
                <ButtonDelete onClick={openModalDelete}>🗑️ DELETE</ButtonDelete>
                <ButtonEdit onClick={trailerMovie}>▷ TRAILER</ButtonEdit>
              </ContainerBtn>
            </ContainerBtnRating>
          </div>
        </ContainerContent>
        {openTrailer &&
          ReactDOM.createPortal(
            <ModalTrailer setOpenTrailer={setOpenTrailer} />,
            document.getElementById("modal")
          )}
      </>
    </GlobalContainerContent>
  );
};

const GlobalContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerContent = styled.div`
  background-color: #4d8cc398;
  width: 800px;
  display: flex;
  border-radius: 12px;
  margin: 20px;
  padding: 10px;
`;

const Img = styled.img`
  height: 250px;
  width: 170px;
  border-radius: 12px;
`;

const Title = styled.h1`
  color: #fff;
  margin: 20px;
`;
const ContainerBtnRating = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 73px 50px;
`;

const Rating = styled.button`
  background-color: #fff;
  width: 120px;
  height: 30px;
  border-radius: 20px;
  border: 0;
  font-size: 17px;
`;

const ContainerBtn = styled.div`
  display: flex;
  gap: 50px;
  margin: 0 40px;
`;
const ButtonDelete = styled.button`
  height: 40px;
  width: 130px;
  border-radius: 12px;
  border: 0;
  font-size: 17px;
  font-weight: 700;
  background-color: #c54242;
  color: #fff;
  transition: 0.2s;
  &:hover {
    background-color: #ffffff;
    color: #c54242;
  }
`;
const ButtonEdit = styled.button`
  height: 40px;
  width: 130px;
  border-radius: 12px;
  border: 0;
  font-size: 17px;
  font-weight: 700;
  background-color: #c252ba;
  color: #fff;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    color: #c252ba;
  }
`;
