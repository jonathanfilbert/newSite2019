/**
 *
 * Book
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BookContainer } from './style';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentShown: false,
    };
  }

  toggleComment = () => {
    this.setState({
      commentShown: !this.state.commentShown,
    });
  };

  render() {
    const { status, title, finishDate, url, notes } = this.props;

    const { commentShown } = this.state;

    return (
      <BookContainer>
        <div className="bookContainer">
          <div className={status === 'done' ? 'notDone' : 'done'}>
            <div>
              {title}{' '}
              <a
                href={url}
                style={{ color: 'black', textDecoration: 'none' }}
                target="_blank"
              >
                <span role="img" aria-label="link">
                  🔗
                </span>
              </a>
            </div>
          </div>
          <div className="finishDate">
            Finish date: {status === 'done' ? finishDate : '-'}
          </div>
          <div className={status === 'done' ? 'comment' : 'hidden'}>
            <div>
              <b>Jofil's notes:</b>
            </div>
            <div onClick={this.toggleComment}>
              <u className="clickable">{!commentShown ? 'show' : 'hide'}</u>
            </div>
            <div className={commentShown ? 'shown' : 'hidden'}>{notes}</div>
          </div>
        </div>
      </BookContainer>
    );
  }
}

Book.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  finishDate: PropTypes.string,
  url: PropTypes.string,
  notes: PropTypes.string,
};

export default Book;
