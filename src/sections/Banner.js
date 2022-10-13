import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;
const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Audiowide";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  transform: rotate(6deg) skew(12deg);

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const BannerComponent1 = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Audiowide";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  transform: rotate(-6deg) skew(-12deg);

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <Section>
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Fashion is an armour{" "}
          </span>
        </BannerComponent>
        <BannerComponent1>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            to survive everyday life
          </span>
        </BannerComponent1>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            One is never over-dressed or
          </span>
        </BannerComponent>
        <BannerComponent1>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            under-dressed
          </span>
        </BannerComponent1>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            with a Little Black Dress
          </span>
        </BannerComponent>
      </Container>
    </Section>
  );
};

export default Banner;
