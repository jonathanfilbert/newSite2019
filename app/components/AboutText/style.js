import styled from 'styled-components';

export const AboutTextContainer = styled.div`
  .titleText {
    font-family: 'Helvetica';
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
    color: #212121;
  }
  .normalText {
    font-family: 'Helvetica';
    font-size: 1.5em;
    font-weight: lighter;
    padding-bottom: 1.5em;
    padding-top: 1em;
    color: #212121;
  }
  .aboutContainer {
    padding-left: 30em;
    padding-right: 30em;
    padding-top: 3em;
    padding-bottom: 3em;
  }
  .link {
    color: black;
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
      padding-left: 8em;
      padding-right: 8em;
    }
  }
  @media only screen and (max-width: 441px) {
    .aboutContainer {
      padding-left: 5em;
      padding-right: 5em;
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
      padding-left: 3em;
      padding-right: 3em;
    }
  }
`;
