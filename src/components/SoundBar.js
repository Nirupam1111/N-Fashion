import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from "framer-motion";
import music from "../assets/audio/Polozhenie.mp3"

const Box = styled(motion.div)`
display:flex;
// cursor:pointer;
position:fixed;
right:8rem;
top:2.5rem;
z-index:6;
&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}

@media (max-width: 56.25em) {      //900 
    right:5rem;
  }
  @media (max-width: 37.5em) {     //600     
    right:4rem;
    top:3rem;
  }
  @media (max-width: 28.1em) {         //450 
    right:3rem;
  }
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.body};
border: 1px solid transparent;
border-radius: 5px;
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1.4rem;
width: 1px;
margin:0 0.1rem;
:hover {
background: ${props => props.theme.text};
}
`

const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
  
      transition: {
        duration: 5,
        delay: 5,
        ease: "easeInOut",
      },
    },
  };

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }

    return (
        <Box onClick={() => handleClick()} 
        variants={textVariants} initial="hidden" animate="visible"
        >
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>


            <audio src={music} ref={ref}  loop />
        </Box>
    )
}

export default SoundBar
