import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    font-family: 'Montserrat', sans-serif;
background:#081b27;
color:white;
overflow-x: hidden;

}
html{
    scroll-behavior:smooth;

&::-webkit-scrollbar{
        width:0.5rem;
    }
      &::-webkit-scrollbar-thumb{
      background-color:red;   
      border-radius:1rem;

   } 

&::-webkit-scrollbar-track{
background:#081b27;           

 }
h3,h2{
    color:white;
    padding:1rem;
    font-size:1.5rem;
}
h2{
    font-size:2rem;
}
p{
    line-height:150%;
    font-size:1.1rem;
    padding:1rem;
}
button{
    margin:1rem;
}}
`;

export default GlobalStyle;
