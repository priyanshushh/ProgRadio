import React, { useState } from "react";
import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Player({ song, setImageChange }) {
  const [val, setVal] = useState(0);
  setImageChange(val);
  return (
    <Wrapper>
      {song && <SongName>{song[val]?.share.subject}</SongName>}
      <AudioPlayer
        autoPlay
        src={song && song[val]?.hub?.actions[1]?.uri}
        style={{
          // borderRadius: "15px",
          backgroundColor: "rgb(57, 57, 57, 20%)",
          backdropFilter: "blur(15px)",
          width: "100%",
          outline: "none",
          marginBottom: "-29px",
          color: "white",
        }}
        onEnded={(e) => (val <= 99 ? setVal(val + 1) : setVal(0))}
        layout="stacked-reverse"
      />
    </Wrapper>
  );
}

export default Player;
const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  position: absolute;
  bottom: 1.4vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SongName = styled.p`
  font-size: 25px;
  color: white;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
