import styled from 'styled-components';

export const AboutTextContainer = styled.div`
  .titleText {
    font-family: 'Helvetica';
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
  }
  .normalText {
    font-family: 'Helvetica';
    font-size: 1.5em;
    font-weight: normal;
    padding-bottom: 1.5em;
    padding-top: 1em;
  }
  .aboutContainer {
    padding-left: 30em;
    padding-right: 30em;
    padding-top: 3em;
    padding-bottom: 3em;
  }
  @media only screen and (max-width: 1125px) {
    .aboutContainer {
      padding-left: 20em;
      padding-right: 20em;
    }
  }
  @media only screen and (max-width: 826px) {
    .aboutContainer {
      padding-left: 15em;
      padding-right: 15em;
    }
  }
  @media only screen and (max-width: 667px) {
    .aboutContainer {
      padding-left: 2em;
      padding-right: 2em;
    }
  }
  @media only screen and (max-width: 441px) {
    .aboutContainer {
      padding-left: 1em;
      padding-right: 1em;
    }
    .titleText {
      font-size: 1.2em;
    }
    .normalText {
      font-size: 1em;
    }
  }
  @media only screen and (max-width: 313px) {
    .titleText {
      font-size: 1em;
    }
    .normalText {
      font-size: 0.8em;
    }
    .aboutContainer {
      padding-left: 1em;
      padding-right: 1em;
    }
  }
`;
