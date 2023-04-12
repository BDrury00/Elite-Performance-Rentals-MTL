import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  color: grey;
  font-family: 'Oswald', sans-serif;
  
}

#root {
  background-image: linear-gradient(
  340deg,
  hsl(0deg 52% 50%) 0%,
  hsl(3deg 46% 52%) 25%,
  hsl(5deg 38% 55%) 36%,
  hsl(6deg 27% 56%) 42%,
  hsl(6deg 15% 58%) 46%,
  hsl(0deg 0% 58%) 48%,
  hsl(344deg 0% 46%) 50%,
  hsl(344deg 0% 35%) 53%,
  hsl(344deg 0% 24%) 59%,
  hsl(344deg 0% 14%) 70%,
  hsl(0deg 0% 4%) 100%
);
min-height: 125vh;

}

`;

export default GlobalStyle;
