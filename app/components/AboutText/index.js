/* eslint-disable jsx-a11y/accessible-emoji */
/**
 *
 * AboutText
 *
 */

import React from 'react';
import styled from 'styled-components';
import { AboutTextContainer } from './style';

const TechStackStyle = styled.div`
  padding-bottom: 0.3em;
`;

class AboutText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AboutTextContainer>
        <div>
          <div className="aboutContainer">
            <div className="titleText">Who...are you?</div>
            <div className="normalText">
              Who am I? Why are we here? What is life? While these are the
              questions that I contemplate on every friday evening, to put it
              simply, I am a <s> wizard, Harry</s>
              <b> web developer </b> who values minimalism and elegance in
              problem solving in correspondence with my design passion.
            </div>
            <div className="titleText">Tech stack?</div>
            <div className="normalText">
              <TechStackStyle>
                <div>✅ React - Redux</div>
              </TechStackStyle>
              <TechStackStyle>
                <div>✅ Styled Components - Rebass</div>
              </TechStackStyle>
              <TechStackStyle>
                <div>✅ DjangoREST - GraphQL - Hasura</div>
              </TechStackStyle>
            </div>
            <div className="titleText">Where are you studying?</div>
            <div className="normalText">
              I prefer to say that I learn most of my knowledge from the
              <i> Interwebz</i> but if you are talking about my formal
              education, currently I am studying{' '}
              <s>Defense Against the Dark Arts</s> <b>Information Systems</b> at{' '}
              <b>University of Indonesia</b>.
            </div>
            <div className="titleText">What are your main interests?</div>
            <div className="normalText">
              Apart from <s>horcruxes</s>, <b>User Interfaces</b>, and{' '}
              <b>Front End Development, </b> I am interested in{' '}
              <b>The Open Web, Decentralization, </b>and discounts. Oh, and I
              occassionally rant on{' '}
              <a
                href="https://twitter.com/jonathanfilbert"
                target="_blank"
                className="link"
              >
                <u>Twitter</u>
              </a>
              .
            </div>
            <div className="titleText">Coffee?</div>
            <div className="normalText">
              Less-iced Americano. Usually accompanied with a piece of brownie,
              and an internet connection.
            </div>
            <div className="titleText">What are your principles in life?</div>
            <div className="normalText">
              <div>⭐️ Challenges make progress</div>
              <div>
                ⭐️ Being honest and straightforward will take you places
              </div>
              <div>⭐️ ️️Learn from mistakes</div>
              <div>⭐️ Creativity and problem solving are inseparable</div>
              <div>
                ⭐️ Design should not be in the way of accessibility and
                performance
              </div>
              <div>⭐️ Teamwork is awesome</div>
              <div>⭐️ Design and code with scalability in mind</div>
              <div>
                ⭐️ <i>Martabak keju campur</i> is the best food known to
                mankind.
              </div>
            </div>
            <div className="titleText">Any cool side projects?</div>
            <div className="normalText">
              Aside from this very website, I have designed and led a group of
              friends in creating a{' '}
              <a href="https://quanta2018.com" target="_blank" className="link">
                <u>profile website</u>
              </a>{' '}
              co-built a full stack{' '}
              <a
                href="http://jambu-muda.herokuapp.com"
                target="_blank"
                className="link"
              >
                <u>book-borrowing web application</u>
              </a>{' '}
              and part of the UI design team for an{' '}
              <a href="https://compfest.id" target="_blank" className="link">
                <u>event website</u>.
              </a>{' '}
              Apart from that, currently I am co-building an open source{' '}
              <a
                href="https://github.com/HizkiFW/worshipweb"
                className="link"
                target="_blank"
              >
                lyric-displayer web application
              </a>
              .
            </div>
            <div className="titleText">Favourite coding music?</div>
            <div className="normalText">
              <a
                className="link"
                href="https://www.youtube.com/watch?v=-9Hfda6lXcc&t=51s"
                target="_blank"
              >
                <u>This</u>
              </a>
            </div>
            <div className="normalText ">
              Still have questions? Feel free to{' '}
              <a className="link" href="mailto:jonathanflisyanto@gmail.com">
                reach out
              </a>
            </div>
          </div>
        </div>
      </AboutTextContainer>
    );
  }
}

export default AboutText;
