import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavContainer = styled(motion.div)`
  width: 7vw;
  z-index: 7;
  position: absolute;
  top: 10rem;
  left: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  }
`;
const MenuItems = styled(motion.ul)`
  font-family: "Goldman";
  position: relative;
  color: ${(props) => props.theme.text};
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;

  li::after {
    content: '';
    width: 0px;
    height: 2px;
    display: block;
    background: ${(props) => props.theme.navColor};
    transition: 1s;
  }  
  li:hover::after {
    width: 100%;
  }
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.navColor};
  // cursor: pointer;
  padding: 0.2rem 0;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <NavContainer
      click={+click}
      initial={{
        y: "100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 10,
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuItem
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9, Y: 0 }} onClick={() => handleScroll("#home")}><span>home</span></MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9, Y: 0 }} onClick={() => handleScroll(".about")}><span>about</span></MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9, Y: 0 }} onClick={() => handleScroll("#shop")}><span>shop</span></MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9, Y: 0 }} onClick={() => handleScroll("#new-arrival")}><span>new arrival</span></MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
