import {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`

  :root{
      --fundo: #F2F3F5;
      --name: #16738E;
      --capa: #3E8189;
  }
 
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body{
      background-color: var(--fundo);
  }

  body,textarea,button{
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
  }

  button{
      cursor: pointer;
  }
  
`;