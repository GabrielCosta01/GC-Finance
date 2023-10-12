import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --bg: #F8F9FA;
    --color-primary: #FD377E;
    --color-primary2: #E34981;
    --second-color: #03B898;
    --grey1: #F8F9FA ;
    --grey2: #E9ECEF;
    --grey3: #868E96;
    --grey4: #212529;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Nunito', sans-serif;

    ::-webkit-scrollbar{
      width: 0.5rem;
      background-color: var(--grey2);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: var(--color-primary2);
      border-radius: 2rem;
    }

  }

  body{
    margin: 0;
    padding: 0
  }

  input{
    border: none;
  }
`;
export default GlobalStyle;
