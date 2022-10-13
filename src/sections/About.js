import React from "react";
import styled from "styled-components";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Arizonia";
  font-weight: 300;

  ::after {
    content: '';
    width: 100%;
    height: 2px;
    display: block;
    background: ${(props) => props.theme.navColor};
    transition: 1s;
  }  
  :hover::after {
    width: 0;
  }

  position: absolute;
  top: 1rem;
  right: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const Left = styled.div`
  width: 50%;
  // min-height: 100vh;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    // min-height: 0vh;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 87.5em) {      //1400 
    // font-size: 1.3em;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  margin-right: 2rem;
  img {
    width: 100%;
    height: auto;
  }
  #nnn{
    height: 100%;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 35%;
    bottom: 10%;
    z-index: 1;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 150%;
    bottom: 30%;
  }
  
  .popupBubble {
    width: 15%;
    height: 10%;
    background: ${(props) => props.theme.body};
    position: absolute;
    left: 90%;
    bottom: 30%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontxl};
    z-index: 0;
    @media (max-width: 64em) {
      display: none;
    }
    }

  @media (max-width: 64em) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100vh;
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Right>
        <img id="nnn" src={img1} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="-12"
          src={img2}
          className="small-img-1"
          alt="About Us"
          data-scroll-direction="horizontal"
        />
        <span
          data-scroll
          data-scroll-speed="3"
          className="popupBubble"
          data-scroll-call="dynamicColor" 
          data-scroll-repeat="" 
          data-scroll-delay="0.06"
        >🙏🏻</span>
        <img
          data-scroll
          data-scroll-speed="5"
          src={img3}
          alt="About Us"
          className="small-img-2"
        />
      </Right>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
      Our mission is to provide a trusted and experienced online resource for the retail community. We are committed to providing our members with a wide range of products and services.
        <br />
        <br />
        The company is founded by <span style={{"color":"#D6A2AD"}}>Nirupam</span>, who have a keen interest in fashion. Their aim is to provide the best possible shopping experience to support the companies that do. 
        <br />
        <br />
        We love clothing. We believe that every person should have a wonderful wardrobe filled with clothes that will make them feel good. 
      </Left>
    </Section>
  );
};

export default About;
