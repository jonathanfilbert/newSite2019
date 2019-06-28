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
    transition:0.1s;
    background:${props => (props.darkMode ? '#212121' : '#fcfcfc')};
    color:${props => (props.darkMode ? '#fcfcfc' : '#212121')};
  }
  a{
    color:${props => (props.darkMode ? '#fcfcfc' : '#212121')}
  }
  a:hover {
    color: ${props => (props.darkMode ? '#222222' : '#fdfdfd')};
    transition: 0.5s;
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

  .hidden{
    display:none;
    top:100vh;
    transition:0.3s;
  }
  .shown{
    top:0;
    transition:0.3s;
  }
`;

export default GlobalStyle;
