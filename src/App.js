import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";
import Player from "./Player";
import useFetch from "./useFetch";
import ImageSelector from "./ImageSelector";
import "./index.css";
import image from "./images/1.jpg";

import { Cate } from "./Data.js";

function App() {
  let real = "";

  const [bgr, setBgr] = useState(image);
  const [visible, setVisible] = useState(false);
  const [bgSlector, setBgSlector] = useState(false);
  function setVal() {
    setVisible(!visible);
  }

  function setBg() {
    setBgSlector(!bgSlector);
  }
  const [itemSong, setItemSong] = useState("POP");
  const handleclick = (item) => {
    setItemSong(item);
  };

  const [imageChange, setImageChange] = useState(0);
  // console.log(bgr);
  const { song } = useFetch(
    `https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${itemSong}`
  );
  song ? (real = song.data) : (real = "");
  return (
    <MainCont>
      <Container>
        <Navbar setVal={setVal} setBg={setBg} />
        {visible && (
          <Category>
            {Cate.map((item, index) => (
              <Item
                onClick={() => {
                  handleclick(item);
                }}
                key={index}
              >
                {item}
              </Item>
            ))}
          </Category>
        )}
        {bgSlector && <ImageSelector setBgr={setBgr} />}
        <Player song={real} setImageChange={setImageChange} />
      </Container>
      {song && <DVD src={song.data[imageChange].images.background} />}
      <IMGG src={bgr} alt="test" />
    </MainCont>
  );
}

export default App;

const MainCont = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
const IMGG = styled.img`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: -0px;
  z-index: -1000;
`;

const rotater = keyframes`
0%{

  transform:rotate(0deg);
}100%{
  transform:rotate(360deg);
}
`;

const DVD = styled.img`
  height: 15vw;
  width: 15vw;
  position: absolute;
  left: 43%;
  bottom: 40%;
  border-radius: 50%;
  z-index: -1;
  border: 2px solid white;
  animation-name: ${rotater};
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @media (max-width: 900px) {
    left: 40%;
    bottom: 50%;
    height: 200px;
    width: 200px;
  }
  @media (max-width: 500px) {
    left: 25%;
    bottom: 50%;
  }
`;

const Container = styled.div``;
const Category = styled.div`
  width: 200px;
  margin: -13px 20px;
  background-color: rgb(57, 57, 57, 20%);
  backdrop-filter: blur(15px);
  padding: 10px;
  display: flex;
  gap: 8px;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
`;
const blinker = keyframes`
  0% {
    color: red;
  }
  25% {
    color: blue;
  }
  50% {
    color: blueviolet;
  }
  75% {
    color: crimson;
  }
  100% {
    color: violet;
  }
`;
const Item = styled.p`
  cursor: pointer;
  color: white;
  font-size: 18px;
  &:hover {
    transform: translateX(6px);
    font-weight: 900;
    animation-name: ${blinker};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;
