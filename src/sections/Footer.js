import React from "react";
import styled from "styled-components";
import Logo from "../assets/Svgs/abstract.svg";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
    margin-top: 2rem;
  }
  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: "Fascinate";

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    // border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    // cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Loogo = styled.div`
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: transparent;
    color: #fff;
    // min-height: 100vh;
    display: grid;
    place-items: center;

  .dots {
    display: flex;
    gap: 3px;
  }

  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: hsl(var(--hue, 0), 75%, 75%);
    background-image: radial-gradient(circle at top, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.6666666667));
    -webkit-animation: dots 1s var(--delay, 0s) infinite alternate ease-in-out;
            animation: dots 1s var(--delay, 0s) infinite alternate ease-in-out;
  }
  @-webkit-keyframes dots {
    from {
      transform: translateY(-60px);
    }
    to {
      transform: translateY(60px);
    }
  }
  @keyframes dots {
    from {
      transform: translateY(-60px);
    }
    to {
      transform: translateY(60px);
    }
  }
  .dot:nth-child(1) {
    --hue: 300;
    --delay: -900ms ;
  }
  .dot:nth-child(2) {
    --hue: 280;
    --delay: -750ms ;
  }
  .dot:nth-child(3) {
    --hue: 260;
    --delay: -600ms ;
  }
  .dot:nth-child(4) {
    --hue: 240;
    --delay: -450ms ;
  }
  .dot:nth-child(5) {
    --hue: 220;
    --delay: -300ms ;
  }
  .dot:nth-child(6) {
    --hue: 200;
    --delay: -150ms ;
  }
  .dot:nth-child(7) {
    --hue: 180;
    --delay: 0ms ;
  }
`

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img  data-scroll data-scroll-speed="1" src={Logo} alt="" />
        <h3 data-scroll data-scroll-speed="-1">
          N-Fashion
        </h3>
        <Loogo>
        <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        </div>
        </Loogo>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>home</li>
          <li onClick={() => handleScroll(".about")}>about</li>
          <li onClick={() => handleScroll("#shop")}>shop</li>
          <li onClick={() => handleScroll("#new-arrival")}>new arrival</li>
          <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              reviews
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made by &nbsp;
            <a
              href="https://github.com/Nirupam1111"
              target="_blank"
              rel="noreferrer"
            >
              Nirupam Sur
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
