import React from "react";
import styled from "styled-components";
import "./index.css";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
function ImageSelector({ setBgr }) {
  const sendImage = (imagee) => {
    setBgr(imagee);
  };
  return (
    <ImgSelector>
      <IMAGE
        onClick={() => {
          sendImage(image1);
        }}
        className={"imageHW"}
        src={image1}
        alt="image1"
      />
      <IMAGE
        onClick={() => {
          sendImage(image2);
        }}
        className={"imageHW"}
        src={image2}
        alt="image2"
      />
      <IMAGE
        onClick={() => {
          sendImage(image3);
        }}
        className={"imageHW"}
        src={image3}
        alt="image3"
      />
      <IMAGE
        onClick={() => {
          sendImage(image4);
        }}
        className={"imageHW"}
        src={image4}
        alt="imag4e"
      />
      <IMAGE
        onClick={() => {
          sendImage(image5);
        }}
        className={"imageHW"}
        src={image5}
        alt="image5"
      />
    </ImgSelector>
  );
}

export default ImageSelector;

const ImgSelector = styled.div`
  position: absolute;
  top: 20vh;
  right: 0vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(57, 57, 57, 20%);
  backdrop-filter: blur(15px);
`;
const IMAGE = styled.img``;
