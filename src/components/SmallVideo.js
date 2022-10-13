import React, {useState, useRef} from "react";
import styled from "styled-components";
import MainVideo from "../assets/Shoes.mp4";

const VideoContainer = styled.section`
  width: 40%;
  height: auto;
  // position: absolute;
  // top: 30%;
  // left: 28%;
  z-index: -10;

  position: absolute;
  top: 10rem;
  left: 28vw;

  button{
    height: 50px;
    width: 50px;

  }

  video {
    width: 100%;
    height: 100%;
    // object-fit: cover; 

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }
  @media (max-width: 50em) {
    width: 70%;
  }
  @media (max-width: 30em) {
    object-position: center 50%;
  }
  @media (max-width: 31.25em) {
    display: none;
  }
`;

const Button = styled.div`
  height: 50px;
  width: 50px;
  background: transparent;
  border: 3px solid black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000000000000000;
  opacity: 0;
`
const Play = styled.div`
height: 42px;
width: 40px;
background: black;
clip-path: polygon(0 1%, 0% 100%, 100% 54%);
border-radius: 4px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-38%, -52%);
z-index: 100000000000;
`

const SmallVideo = () => {
    const ref = useRef(null);
    const [click, setClick] = useState(true);
    const [mopacity, setOpacity] = useState(0)
    const myPlay = document.querySelector('.play');

    const handleClick = () => {
        setClick(!click);
        myPlay.style.opacity = Number(!mopacity);
        setOpacity(Number(!mopacity));
        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }

  return (
    <VideoContainer  onClick={handleClick}>
        <Button className="play" onClick={handleClick}>
            <Play />
        </Button>
        <video  ref={ref} src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  )
}

export default SmallVideo
