import styled from 'styled-components';

export const BookPageContainer = styled.div`
  min-height: 100vh;
  font-family: 'Helvetica';
  font-size: 1.5em;
  font-weight: normal;
  .AllContainer {
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 2em;
  }
  .title {
    font-weight: bold;
    font-size: 1.5em;
  }
  .titleContainer {
    margin-bottom: 2em;
  }
  .bookContainer {
    margin-bottom: 1em;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1em;
  }
`;
