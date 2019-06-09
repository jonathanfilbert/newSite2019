import styled from 'styled-components';

export const LifeUpdateContainer = styled.div`
  font-family: 'Helvetica';
  color: #212121;
  .updateTitle {
    font-weight: normal;
    font-size: 1.8em;
  }
  .updateContainer {
    margin-left: 1em;
    margin-right: 1em;
  }
  .flexContainer {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    font-size: 1.2em;
    font-weight: lighter;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1em;
  }
  .updateTime {
    flex: 1;
  }
  .updateName {
    flex: 1;
  }
`;
