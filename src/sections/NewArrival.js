import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../assets/Images/11.webp";
import img2 from "../assets/Images/12.webp";
import img3 from "../assets/Images/13.webp";
import img4 from "../assets/Images/14.webp";
import SmallVideo from "../components/SmallVideo";

const Section = styled.section`
  // min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  /* background-color: yellow; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Arizonia";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
  
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

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  // @media (max-width: 48em) {
  //   display: none;
  // }
  @media (max-width: 56.25em) {
    width: 40%;
    top: 40%;
  }
  @media (max-width: 35em) {
    width: 40%;
    top: 60%;
  }
  @media (max-width: 31.25em) {
    width: 80%;
    z-index: -1;
    border-radius: 5px;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.navRgba},0.4)`};
  }
`;
const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  // transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  /* width: 65%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  padding: 2rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  
  img {
    width: 100%;
    height: auto;
    z-index: 5;
  // transform: rotate(6deg) skew(12deg);
  }
  h2{
  font-family: "Fascinate";
  }
`;

const Rotate = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 12rem;
left: 21vw;
z-index: 11;

box-sizing: border-box;
margin: 0;
padding: 0;

  .circle{
    position: relative;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text{
    position: absolute;
    height: 100%;
    width: 100%;
    animation: rotateText 10s linear infinite;
  }
  @keyframes rotateText{
    0%{transform: rotate(360deg);}
    100%{transform: rotate(0deg);}
  }
  .text span{
    position: absolute;
    left: 50%;
    transform-origin: 0 7.5rem;
    font-size: 1.4em;
  }
`

const RotateIssum = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
    font-family: "Abril Fatface", cursive;
    perspective: 600px;
    overflow: hidden;
    // position: absolute;
    // top: 40%;
    // right: 30%;

    position: absolute;
    top: 20rem;
    right: 30vw;

  .banner {
    position: relative;
    width: 180px;
    height: 330px;
    // background-image: linear-gradient(90deg, rgba(17, 17, 17, 0), #111, rgba(17, 17, 17, 0)), linear-gradient(90deg, rgba(17, 17, 17, 0), rgba(17, 17, 17, 0.6666666667), rgba(17, 17, 17, 0)), linear-gradient(90deg, rgba(17, 17, 17, 0), #111, rgba(17, 17, 17, 0));

    background-size: 100% 110px;
    background-repeat: no-repeat;
    background-position: 50% 0%, 50% 50%, 50% 100%;
    transform-style: preserve-3d;
  }

  .panel {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px;
    height: 120px;
    transform-style: preserve-3d;
    -webkit-animation: spin 30s infinite linear;
            animation: spin 30s infinite linear;
  }
  @-webkit-keyframes spin {
    from {
      transform: translate(-50%, calc(-50% - 120px)) rotateY(180deg) translateZ(89px) rotateZ(-11deg);
    }
    to {
      transform: translate(-50%, calc(-50% + 120px)) rotateY(-540deg) translateZ(89px) rotateZ(-11deg);
    }
  }
  @keyframes spin {
    from {
      transform: translate(-50%, calc(-50% - 120px)) rotateY(180deg) translateZ(89px) rotateZ(-11deg);
    }
    to {
      transform: translate(-50%, calc(-50% + 120px)) rotateY(-540deg) translateZ(89px) rotateZ(-11deg);
    }
  }
  .panel:nth-child(1) {
    -webkit-animation-delay: -30s;
            animation-delay: -30s;
    --left: 0px;
    --hue: 180;
  }
  .panel:nth-child(2) {
    -webkit-animation-delay: -29.4s;
            animation-delay: -29.4s;
    --left: -25px;
    --hue: 181.2;
  }
  .panel:nth-child(3) {
    -webkit-animation-delay: -28.8s;
            animation-delay: -28.8s;
    --left: -50px;
    --hue: 182.4;
  }
  .panel:nth-child(4) {
    -webkit-animation-delay: -28.2s;
            animation-delay: -28.2s;
    --left: -75px;
    --hue: 183.6;
  }
  .panel:nth-child(5) {
    -webkit-animation-delay: -27.6s;
            animation-delay: -27.6s;
    --left: -100px;
    --hue: 184.8;
  }
  .panel:nth-child(6) {
    -webkit-animation-delay: -27s;
            animation-delay: -27s;
    --left: -125px;
    --hue: 186;
  }
  .panel:nth-child(7) {
    -webkit-animation-delay: -26.4s;
            animation-delay: -26.4s;
    --left: -150px;
    --hue: 187.2;
  }
  .panel:nth-child(8) {
    -webkit-animation-delay: -25.8s;
            animation-delay: -25.8s;
    --left: -175px;
    --hue: 188.4;
  }
  .panel:nth-child(9) {
    -webkit-animation-delay: -25.2s;
            animation-delay: -25.2s;
    --left: -200px;
    --hue: 189.6;
  }
  .panel:nth-child(10) {
    -webkit-animation-delay: -24.6s;
            animation-delay: -24.6s;
    --left: -225px;
    --hue: 190.8;
  }
  .panel:nth-child(11) {
    -webkit-animation-delay: -24s;
            animation-delay: -24s;
    --left: -250px;
    --hue: 192;
  }
  .panel:nth-child(12) {
    -webkit-animation-delay: -23.4s;
            animation-delay: -23.4s;
    --left: -275px;
    --hue: 193.2;
  }
  .panel:nth-child(13) {
    -webkit-animation-delay: -22.8s;
            animation-delay: -22.8s;
    --left: -300px;
    --hue: 194.4;
  }
  .panel:nth-child(14) {
    -webkit-animation-delay: -22.2s;
            animation-delay: -22.2s;
    --left: -325px;
    --hue: 195.6;
  }
  .panel:nth-child(15) {
    -webkit-animation-delay: -21.6s;
            animation-delay: -21.6s;
    --left: -350px;
    --hue: 196.8;
  }
  .panel:nth-child(16) {
    -webkit-animation-delay: -21s;
            animation-delay: -21s;
    --left: -375px;
    --hue: 198;
  }
  .panel:nth-child(17) {
    -webkit-animation-delay: -20.4s;
            animation-delay: -20.4s;
    --left: -400px;
    --hue: 199.2;
  }
  .panel:nth-child(18) {
    -webkit-animation-delay: -19.8s;
            animation-delay: -19.8s;
    --left: -425px;
    --hue: 200.4;
  }
  .panel:nth-child(19) {
    -webkit-animation-delay: -19.2s;
            animation-delay: -19.2s;
    --left: -450px;
    --hue: 201.6;
  }
  .panel:nth-child(20) {
    -webkit-animation-delay: -18.6s;
            animation-delay: -18.6s;
    --left: -475px;
    --hue: 202.8;
  }
  .panel:nth-child(21) {
    -webkit-animation-delay: -18s;
            animation-delay: -18s;
    --left: -500px;
    --hue: 204;
  }
  .panel:nth-child(22) {
    -webkit-animation-delay: -17.4s;
            animation-delay: -17.4s;
    --left: -525px;
    --hue: 205.2;
  }
  .panel:nth-child(23) {
    -webkit-animation-delay: -16.8s;
            animation-delay: -16.8s;
    --left: -550px;
    --hue: 206.4;
  }
  .panel:nth-child(24) {
    -webkit-animation-delay: -16.2s;
            animation-delay: -16.2s;
    --left: -575px;
    --hue: 207.6;
  }
  .panel:nth-child(25) {
    -webkit-animation-delay: -15.6s;
            animation-delay: -15.6s;
    --left: -600px;
    --hue: 208.8;
  }
  .panel:nth-child(26) {
    -webkit-animation-delay: -15s;
            animation-delay: -15s;
    --left: -625px;
    --hue: 210;
  }
  .panel:nth-child(27) {
    -webkit-animation-delay: -14.4s;
            animation-delay: -14.4s;
    --left: -650px;
    --hue: 211.2;
  }
  .panel:nth-child(28) {
    -webkit-animation-delay: -13.8s;
            animation-delay: -13.8s;
    --left: -675px;
    --hue: 212.4;
  }
  .panel:nth-child(29) {
    -webkit-animation-delay: -13.2s;
            animation-delay: -13.2s;
    --left: -700px;
    --hue: 213.6;
  }
  .panel:nth-child(30) {
    -webkit-animation-delay: -12.6s;
            animation-delay: -12.6s;
    --left: -725px;
    --hue: 214.8;
  }
  .panel:nth-child(31) {
    -webkit-animation-delay: -12s;
            animation-delay: -12s;
    --left: -750px;
    --hue: 216;
  }
  .panel:nth-child(32) {
    -webkit-animation-delay: -11.4s;
            animation-delay: -11.4s;
    --left: -775px;
    --hue: 217.2;
  }
  .panel:nth-child(33) {
    -webkit-animation-delay: -10.8s;
            animation-delay: -10.8s;
    --left: -800px;
    --hue: 218.4;
  }
  .panel:nth-child(34) {
    -webkit-animation-delay: -10.2s;
            animation-delay: -10.2s;
    --left: -825px;
    --hue: 219.6;
  }
  .panel:nth-child(35) {
    -webkit-animation-delay: -9.6s;
            animation-delay: -9.6s;
    --left: -850px;
    --hue: 220.8;
  }
  .panel:nth-child(36) {
    -webkit-animation-delay: -9s;
            animation-delay: -9s;
    --left: -875px;
    --hue: 222;
  }
  .panel:nth-child(37) {
    -webkit-animation-delay: -8.4s;
            animation-delay: -8.4s;
    --left: -900px;
    --hue: 223.2;
  }
  .panel:nth-child(38) {
    -webkit-animation-delay: -7.8s;
            animation-delay: -7.8s;
    --left: -925px;
    --hue: 224.4;
  }
  .panel:nth-child(39) {
    -webkit-animation-delay: -7.2s;
            animation-delay: -7.2s;
    --left: -950px;
    --hue: 225.6;
  }
  .panel:nth-child(40) {
    -webkit-animation-delay: -6.6s;
            animation-delay: -6.6s;
    --left: -975px;
    --hue: 226.8;
  }
  .panel:nth-child(41) {
    -webkit-animation-delay: -6s;
            animation-delay: -6s;
    --left: -1000px;
    --hue: 228;
  }
  .panel:nth-child(42) {
    -webkit-animation-delay: -5.4s;
            animation-delay: -5.4s;
    --left: -1025px;
    --hue: 229.2;
  }
  .panel:nth-child(43) {
    -webkit-animation-delay: -4.8s;
            animation-delay: -4.8s;
    --left: -1050px;
    --hue: 230.4;
  }
  .panel:nth-child(44) {
    -webkit-animation-delay: -4.2s;
            animation-delay: -4.2s;
    --left: -1075px;
    --hue: 231.6;
  }
  .panel:nth-child(45) {
    -webkit-animation-delay: -3.6s;
            animation-delay: -3.6s;
    --left: -1100px;
    --hue: 232.8;
  }
  .panel:nth-child(46) {
    -webkit-animation-delay: -3s;
            animation-delay: -3s;
    --left: -1125px;
    --hue: 234;
  }
  .panel:nth-child(47) {
    -webkit-animation-delay: -2.4s;
            animation-delay: -2.4s;
    --left: -1150px;
    --hue: 235.2;
  }
  .panel:nth-child(48) {
    -webkit-animation-delay: -1.8s;
            animation-delay: -1.8s;
    --left: -1175px;
    --hue: 236.4;
  }
  .panel:nth-child(49) {
    -webkit-animation-delay: -1.2s;
            animation-delay: -1.2s;
    --left: -1200px;
    --hue: 237.6;
  }
  .panel:nth-child(50) {
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
    --left: -1225px;
    --hue: 238.8;
  }

  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .layer::after {
    content: "3D rolling letters #CSS";
    content: "Life is a party, dress like it";
    position: absolute;
    left: var(--left);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    font-size: 90px;
  }
  .layer:nth-child(1) {
    color: hsl(var(--hue, 0), 40%, 20%);
    transform: translateZ(0px);
  }
  .layer:nth-child(2) {
    color: hsl(var(--hue, 0), 40%, 28%);
    transform: translateZ(1px);
  }
  .layer:nth-child(3) {
    color: hsl(var(--hue, 0), 40%, 36%);
    transform: translateZ(2px);
  }
  .layer:nth-child(4) {
    color: hsl(var(--hue, 0), 40%, 44%);
    transform: translateZ(3px);
  }
  .layer:nth-child(5) {
    color: hsl(var(--hue, 0), 40%, 52%);
    transform: translateZ(4px);
  }
  .layer:nth-child(6) {
    color: hsl(var(--hue, 0), 40%, 60%);
    transform: translateZ(5px);
  }
  .layer:nth-child(7) {
    color: hsl(var(--hue, 0), 40%, 68%);
    transform: translateZ(6px);
  }
  .layer:nth-child(8) {
    color: hsl(var(--hue, 0), 40%, 76%);
    transform: translateZ(7px);
  }
  .layer:nth-child(9) {
    color: hsl(var(--hue, 0), 40%, 84%);
    transform: translateZ(8px);
  }
  .layer:nth-child(10) {
    color: hsl(var(--hue, 0), 40%, 92%);
    transform: translateZ(9px);
  }

  @media (max-width: 56.25em) {
      display: none;
    }
`

const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);
  const rotateRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    const text = document.querySelector('.text p');
    text.innerHTML = text.innerText.split("").map(
      (char,i)=>`<span style="transform:rotate(${i*11}deg)">${char}</span>`
    ).join("")
    
    let t1 = gsap.timeline();

    setTimeout(() => {

      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          //   markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        ease: "none,",
      });

      // Verticle Scrolling
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },

        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App", // locomotive element
            scrub: true,

            //   markers:true,
          },
          // we have to increase scrolling height of this section same as the scrolling element width
        }
      );
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="new-arrival">
      {/* <Overlay /> */}
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </Title>

      <Rotate ref={rotateRef}
        // data-scroll
        // data-scroll-speed="-2"
      >
          <div className="circle">
            <div className="text">
              <p>Complement your flawless beauty</p>
            </div>
          </div>
        </Rotate>

      <Container ref={ScrollingRef}>
        <Product img={img1} title="Denim" />
        <Product img={img2} title="Cool Dresses" />
        <Product img={img3} title="Jackets" />
        <Product img={img4} title="T-shirts" />
      </Container>

      <RotateIssum>
      <div className="banner">
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  <div className="panel">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
  </div>
      </RotateIssum>

      <SmallVideo />

      <Text data-scroll data-scroll-speed="-2">
        There is new collection available for cool clothes in all sizes. This
        collection is a great way to find a new look for you. It offers a
        variety of cool apparel styles to fit your taste, while you can also
        find some cool clothes that you can wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men.
        The collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
      </Text>
    </Section>
  );
};

export default NewArrival;
