import styled from 'styled-components';

export const BookContainer = styled.div`
  .notDone {
    text-decoration: line-through;
  }
  .done {
    text-decoration: none;
  }
  .finishDate {
    font-size: 0.8em;
  }
  .comment {
    font-size: 0.8em;
    display: block;
  }
  .hidden {
    display: none;
  }
  .shown {
    display: block;
  }
  .clickable {
    cursor: pointer;
  }
`;
