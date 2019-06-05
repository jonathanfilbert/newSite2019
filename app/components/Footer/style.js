import styled from 'styled-components';

export const FooterContainer = styled.div`
  bottom: 0;
  background: #fcfcfc;
  position: relative;
  width: 100%;
  .socialWrapper {
    padding-left: 1em;
  }
  .separator {
    display: flex;
    flex: 1;
  }
  .footerWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 2em;
    padding-top: 2em;
    z-index: 0;
    flex-shrink: 0;
  }
  .footerText {
    font-family: 'Open Sans';
    color: black;
    font-weight: 700;
    font-size: 0.9em;
    padding-right: 1em;
  }
  .brandIcons {
    margin-left: 0.9em;
    font-size: 2em;
    cursor: pointer;
    color: black;
  }
  #twitter:hover {
    color: #1da1f2;
  }
  #ig:hover {
    color: #405de6;
  }
  #drib:hover {
    color: #ea4c89;
  }
  #med:hover {
    color: #00ab6c;
  }
  #in:hover {
    color: #0077b5;
  }
  @media only screen and (max-width: 443px) {
    .footerWrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .brandIcons {
      font-size: 1.6em;
      margin-left: 0;
      margin: 0.3em;
    }
    .separator {
      flex: 0;
    }
    .socialWrapper {
      padding-bottom: 1em;
      text-align: center;
      padding-left: 0em;
    }
    .footerText {
      margin-left: 0;
      padding-right: 0;
    }
  }
`;
