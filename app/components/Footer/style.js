import styled from 'styled-components';

export const FooterContainer = styled.div`
  bottom: 0;
  background: yellow;
  position: relative;
  width: 100%;
  .footerWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 1;
    padding-bottom: 1em;
    padding-top: 1em;
  }
  .footerText {
    font-family: 'Open Sans';
    color: black;
    font-size: 0.9em;
  }
  .brandIcons {
    padding-left: 0.3em;
    font-size: 2em;
  }
  #twitter:hover {
    color: #1da1f2;
  }
  #ig:hover {
    background: -webkit-radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
