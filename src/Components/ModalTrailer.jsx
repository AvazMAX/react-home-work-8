import React from "react";
import styled from "styled-components";

export const ModalTrailer = ({ setOpenTrailer }) => {

  const closeTrailerModal = () =>{
    setOpenTrailer(false)
  }

  return (
    <div onClick={closeTrailerModal}>
      <ContainerTrailer>
        <iframe
          width="600"
          height="340"
          src="https://www.youtube.com/embed/X2m-08cOAbc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ContainerTrailer>
    </div>
  );
};

const ContainerTrailer = styled.div`
  background-color: #08032c99;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  padding-top: 300px;
  backdrop-filter: blur(2px);
`;
