import React from "react";
import styled from "styled-components";

export const ModalDelete = ({
  id,
  setModalDelete,
  setTodos,
  todos,
  openModalDelete,
}) => {
  const deleteMovie = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    setModalDelete(false);
    openModalDelete();
  };
  const closeBackdropDelete = () => {
    setModalDelete(false);
    openModalDelete();
  };

  return (
    <>
      <BacdropDeleteModal onClick={closeBackdropDelete} />
      <ContGlobal>
        <ContainerDeleteModal>
          <TextDeleteModal>
            Are you sure you want to delete the movie?
          </TextDeleteModal>
          <ContainerBtnDeleteModal>
            <BtnYes onClick={() => deleteMovie(id)}>YES</BtnYes>
            <BtnNo onClick={openModalDelete}>NO</BtnNo>
          </ContainerBtnDeleteModal>
        </ContainerDeleteModal>
      </ContGlobal>
    </>
  );
};

const ContainerDeleteModal = styled.div`
  background: linear-gradient(
      217deg,
      rgba(169, 74, 74, 0.806),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(52, 57, 203, 0.858), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(230, 0, 255, 0.874), rgba(0, 0, 255, 0) 70.71%);
  width: 400px;
  height: 250px;
  padding-top: 1px;
  border-radius: 12px;
  backdrop-filter: blur(2px);
  animation: fade-slide-in 0.5s ease-out forwards;
  @keyframes fade-slide-in {
    0% {
      transform: translateY(-20rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
const BacdropDeleteModal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #1626538e;
  width: 100%;
  height: 100%;
  top: 0;
  backdrop-filter: blur(2px);
`;
const ContGlobal = styled.div`
  position: fixed;
  top: 0;
  margin: 10% 40%;
`;
const ContainerBtnDeleteModal = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
`;
const BtnYes = styled.button`
  width: 200px;
  border-bottom-left-radius: 12px;
  border: 0;
  background-color: #7b1fbe;
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    border: 1px solid #7b1fbe;
    color: #7b1fbe;
  }
`;
const BtnNo = styled.button`
  width: 200px;
  border-bottom-right-radius: 12px;
  border: 0;
  background-color: #42dc1b;
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    border: 1px solid #42dc1b;
    color: #42dc1b;
  }
`;

const TextDeleteModal = styled.h1`
  color: #fff;
  text-align: center;
  margin: 60px 20px;
`;
