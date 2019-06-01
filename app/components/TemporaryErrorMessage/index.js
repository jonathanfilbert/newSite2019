/**
 *
 * TemporaryErrorMessage
 *
 */

import React from 'react';
import { File } from 'react-kawaii';
import { TemporaryErrorMessageContainer } from './style';

function TemporaryErrorMessage() {
  return (
    <TemporaryErrorMessageContainer>
      <div className="errorContainer">
        <File mood="ko" />
        <div className="textContainer">
          <div id="wd">Whoopsie Daisies!</div>
          <div className="normalText">
            Mr. Website is not feeling well right now.
          </div>
          <div className="normalText">Come back later!</div>
        </div>
      </div>
    </TemporaryErrorMessageContainer>
  );
}

export default TemporaryErrorMessage;
