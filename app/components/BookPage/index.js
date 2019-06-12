/**
 *
 * BookPage
 *
 */

import React from 'react';
import Book from '../Book';
import { BookPageContainer } from './style';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BookPageContainer>
        <div className="AllContainer">
          <div className="titleContainer">
            <div className="title">READING LIST</div>
            <div>
              Here are some of the books that I'm currently or planning on
              reading.
            </div>
            <div>
              I will post my personal commentaries on the books once I'm done
              reading them. If you have other great title suggestions that you
              personally love, or want to discuss about a certain book, please{' '}
              <a
                href="mailto:jonathanflisyanto@gmail.com"
                style={{ color: 'black' }}
              >
                shoot me an email.
              </a>
            </div>
          </div>
          <div className="bookContainer">
            <Book
              status="done"
              title="Mockingjay"
              finishDate="3 January 2019"
              url="#"
              notes="Eiusmod enim ea nulla veniam labore. Lorem dolor minim do laboris dolor non ad sint minim. Minim laborum id ut eu cillum enim quis excepteur eu ex culpa aliquip. Consequat duis voluptate quis do ex et. Consequat laborum incididunt eiusmod ullamco labore occaecat exercitation."
            />
          </div>
        </div>
      </BookPageContainer>
    );
  }
}

export default BookPage;
