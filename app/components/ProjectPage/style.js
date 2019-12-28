import styled from 'styled-components';

export const ProjectPageContainer = styled.div`
  font-family: 'Helvetica';
  text-decoration: none;

  .portoImage {
    max-width: 100%;
    min-width: 100%;
  }
  .WholeContainer {
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-right: 2em;
  }
  .legends {
    display: flex;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 1em;
    margin-bottom: 2em;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
  }
  .projectContainer {
    display: flex;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 1em;
    margin-bottom: 2em;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
  }
  .numberContainer {
    flex: 0.4;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }
  .detailContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 1em;
  }
  .titleContainer {
    font-size: 1.3em;
    font-weight: normal;
    margin-bottom: 1em;
  }
  .imageContainer {
    flex: 1;
    text-align: center;
  }
  .description {
    font-size: 1.5em;
    font-weight: normal;
  }
  .images {
    max-width: 50%;
    max-height: 50%;
    height: auto;
    border-radius: 0.5em;
  }
  @media only screen and (max-width: 686px) {
    .description {
      text-align: left;
      font-size: 1em;
    }
    .imageContainer {
      display: none;
    }
    .detailContainer {
      text-align: center;
      margin: 1em;
    }
    .WholeContainer {
      margin: 0;
    }
  }
  @media only screen and (max-width: 493px) {
    .projectContainer {
      flex-direction: row;
    }
    .legends {
      font-size: 0.8em;
    }
  }
  @media only screen and (max-width: 903px) {
    .projectContainer {
      flex-direction: column;
    }
  }
`;
