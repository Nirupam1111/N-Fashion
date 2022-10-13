import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
import "@fontsource/fascinate"
import "@fontsource/goldman"
import "@fontsource/arizonia"
import "@fontsource/audiowide"

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family:"Goldman";
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}

::selection{
    background: #D6A2AD;
    color: #11151C;
}

`
export default GlobalStyles;