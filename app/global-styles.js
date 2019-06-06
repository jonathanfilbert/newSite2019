import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family:'Helvetica';
    src: url('./assets/fonts/Helvetica-Bold.ttf') format('truetype');
    font-weight:bold;
    font-style:normal;
  }
  @font-face{
    font-family:'Helvetica';
    src: url('./assets/fonts/Helvetica-Light.ttf') format('truetype');
    font-weight:lighter;
    font-style:normal;
  }
  @font-face{
    font-family:'Helvetica';
    src: url('./assets/fonts/Helvetica.ttf') format('truetype');
    font-weight:normal;
    font-style:normal;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    display: flex;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .hidden{
    display:none;
  }
`;

export default GlobalStyle;
