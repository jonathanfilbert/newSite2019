/* eslint-disable react/no-unescaped-entities */
/**
 *
 * BookPage
 *
 */

import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Book from '../Book';
import { BookPageContainer } from './style';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://dementorjofil.herokuapp.com/get-book-reviews/')
      .then(response => {
        this.setState({
          reviews: response.data,
        });
      });
  }

  render() {
    return (
      <BookPageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jonathan Filbert | Reading Progress</title>
          <meta
            name="description"
            content="Jonathan Filbert's book-reading project. Honest opinion regaring the book will be posted once I finished reading it."
          />
        </Helmet>
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
              <a href="mailto:jonathanflisyanto@gmail.com">
                shoot me an email.
              </a>
            </div>
          </div>
          <div className="bookContainer">
            {this.state.reviews.map(review => (
              <Book
                key={review.url}
                status={review.status}
                title={review.title}
                notes={review.notes}
                url={review.url}
                finishDate={review.finishDate}
              />
            ))}
          </div>
        </div>
      </BookPageContainer>
    );
  }
}

export default BookPage;
