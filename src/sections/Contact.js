import Facebook from "../assets/Svgs/facebook-square-brands.svg";
import LinkedId from "../assets/Svgs/linkedin-brands.svg";
import Twitter from "../assets/Svgs/twitter-square-brands.svg";
import Instagram from "../assets/Svgs/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.section`
  position: relative;
  width: 100vw;
  margin: 5rem 0 0 0;
  padding: 100vh 0 calc(8.5rem + 2.5vw) 0;
  background-color: ${(props) => props.theme.navColor};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;

  height: 100vh;
  background: rgb(198,70,14);
  background: linear-gradient(180deg, rgba(255,255,255,1) 9%, rgba(214,162,173,1) 100%);
  z-index: -1;
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
    background: ${(props) => props.theme.body};
    transition: 1s;
  }  
  :hover::after {
    width: 0;
  }

  position: absolute;
  top: 30rem;
  right: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    // top: 0;
    // left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
    top: 33rem;
  }
  @media (max-width: 31.25em) {
    top: 35rem;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1.5rem calc(0.5rem + 1vw);
    margin-bottom: 3rem;
    background-color: #000;
    border: none;
    border-radius: 4px;
    color: #fff;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: #000;
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: #000;
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
    background-color: ${(props) => props.theme.navColor};
    color: #000;
    border: none;
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: ${(props) => props.theme.navColor};
    // border-radius: 20px;
    border: 2px solid black;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
      color: ${(props) => props.theme.navColor};
      background: #000;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
@media only Screen and (max-width: 51.43em) {
  display: flex;
  flex-direction: column;
  input {
    &[name="name"] {
      margin-right: 0;
    }
  }
  padding: 1.5rem 0;
}
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title
      data-scroll
      data-scroll-speed="-2"
      data-scroll-direction="horizontal"
      >Get in touch</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com//">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      <Form>
        <Row>
          <input name="name" type="text" placeholder="your name" size="50" />
          <input
            name="email"
            type="email"
            placeholder="enter working email id"
            size="50"
          />
        </Row>
        <textarea
          name=""
          id=""
          cols="30"
          rows="12"
          placeholder="your message"
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;

