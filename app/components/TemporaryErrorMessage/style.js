import styled from 'styled-components';

export const TemporaryErrorMessageContainer = styled.div`
  .errorContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  .textContainer {
    font-family: 'Open Sans';
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #wd {
    font-weight: 700;
    font-size: 3em;
    padding-bottom: 0.4em;
  }
  .normalText {
    font-weight: 400;
    font-size: 1.5em;
  }
  @media only screen and (max-width: 296) {
    #wd {
      font-size: 1em;
    }
    .normalText {
      font-size: 2em;
    }
  }
  @media only screen and (max-width: 452px) {
    #wd {
      font-size: 1.5em;
    }
    .normalText {
      font-size: 1em;
    }
  }
`;
