import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Woman7.mp4";
import { motion } from "framer-motion";
import SoundBar from "./SoundBar";
import CreateImage from "./CreateImage";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }
  @media (max-width: 30em) {
    object-position: center 50%;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Fascinate";
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontBig};
    // text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    color: transparent;
    -webkit-text-stroke: 2px #EAF4F4;

    @media (max-width: 75em) {      //1200 
      font-size: calc(5rem + 4vw);
      letter-spacing: 5px;
    }
    @media (max-width: 37.5em) {     //600     
      font-size: ${(props) => props.theme.fontxxxl};
      letter-spacing: 3px;
    }
    @media (max-width: 28.1em) {         //450 
      font-size: calc(3rem + 4vw);
    }
    @media (max-width: 21.8em) {        //350
      font-size: ${(props) => props.theme.fontxxl};
    }
  }
  span {
    font-family: "Goldman";
    font-size: ${(props) => props.theme.fontmd};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
    padding-left: 30rem;

    // @media (max-width: 30em) {
    //   font-size: ${(props) => props.theme.fontmd};
    //   margin-top: -1.5rem;
    // }

    @media (max-width: 56.25em) {      //900 
      padding-left: 25rem;
    }
    @media (max-width: 37.5em) {     //600     
      padding-left: 15rem;
    }
    @media (max-width: 28.1em) {         //450 
      padding-left: 9rem;
    }
    @media (max-width: 21.8em) {        //350
      padding-left: 5rem;
    }
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 10, // 2
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer className="videoContainer">
      <SoundBar />
      <DarkOverlay />
      <CreateImage />
      <Title variants={container} initial="hidden" animate="show">
      <motion.span
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          Think. Design. Observe
        </motion.span>
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            N
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.12"
            data-scroll-speed="4"
          >
            -
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.11"
            data-scroll-speed="4"
          >
            F
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.10"
            data-scroll-speed="4"
          >
            a
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            s
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.08"
            data-scroll-speed="4"
          >
            h
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.07"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            o
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            n
          </motion.h1>
        </div>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
