import React, { useRef } from "react";
import styled from "styled-components";

export const Modal = ({ setOpen, todos, setTodos }) => {
  const titleValue = useRef();
  const imgValue = useRef();
  const ratingValue = useRef();

  const addMovie = () => {
    if (
      titleValue.current.value &&
      imgValue.current.value &&
      ratingValue.current.value !== ""
    ) {
      const data = {
        id: Math.random(),
        title: titleValue.current.value,
        url: imgValue.current.value,
        rating: ratingValue.current.value,
      };
      setTodos([...todos, data]);
    } else {
      alert("Please fill in field!");
    }
    titleValue.current.value = "";
    imgValue.current.value = "";
    ratingValue.current.value = "";
    setOpen(false);
  };

  const cancelModal = () => {
    setOpen(false);
  };
  const closeModalBackDrop = () => {
    setOpen(false);
  };
  return (
    <>
      <Backdrop onClick={closeModalBackDrop} />
      <ContainerModal>
        <PodContainerModal>
          <Label>
            Movie Title:
            <Span onClick={cancelModal}>🗙</Span>
            <br />
            <Input type="text" ref={titleValue} />
          </Label>
          <br />
          <Label>
            Image URL:
            <br />
            <Input type="text" ref={imgValue} />
          </Label>
          <br />
          <Label>
            Your Rating:
            <br />
            <Input type="number" ref={ratingValue} />
          </Label>
          <br />
          <ButtonModalAdd onClick={addMovie}>ADD MOVIE</ButtonModalAdd>
        </PodContainerModal>
      </ContainerModal>
    </>
  );
};
const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000b8;
  width: 100%;
  height: 100%;
  top: 0;
  backdrop-filter: blur(2px);
`;
const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  margin: 10% 30%;
`;
const PodContainerModal = styled.div`
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.536),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 8, 255, 0.55), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(230, 0, 255, 0.612), rgba(0, 0, 255, 0) 70.71%);
  width: 450px;
  height: 300px;
  padding: 40px;
  border-radius: 25px;
  backdrop-filter: blur(12px);
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
const Label = styled.label`
  font-size: 20px;
  color: #fff;
`;
const Input = styled.input`
  margin: 7px 0;
  width: 440px;
  height: 30px;
  border-radius: 12px;
  border: 0;
`;
const Span = styled.span`
  color: #fff;
  font-size: 30px;
  position: absolute;
  margin-left: 340px;
  margin-top: -30px;
  rotate: calc(0deg);
  transition: 0.5s;
  &:hover {
    rotate: calc(90deg);
  }
`;
const ButtonModalAdd = styled.button`
  width: 300px;
  height: 50px;
  margin: 30px 70px;
  border-radius: 30px;
  border: 0;
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  transition: 0.2s;
  &:hover {
    font-size: 25px;
  }
`;
