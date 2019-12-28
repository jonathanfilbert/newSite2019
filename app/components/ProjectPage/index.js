/* eslint-disable jsx-a11y/accessible-emoji */
/**
 *
 * ProjectPage
 *
 */

import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Skeleton from 'react-loading-skeleton';
import { ProjectPageContainer } from './style';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portos: [],
      isLoading: true,
    };
    this.renderStuffs = this.renderStuffs.bind(this);
  }

  emojiPicker(category) {
    switch (category) {
      case 'Design':
        return '🎨';
      case 'Development':
        return '💻';
      case 'Social':
        return '🤝';
      case 'Leadership':
        return '✏️';
      default:
        return '🤷🏻‍♂️';
    }
  }

  componentDidMount() {
    axios
      .get('https://dementorjofil.herokuapp.com/get-porto-details/')
      .then(response => {
        this.setState({
          portos: response.data,
          isLoading: false,
        });
      });
  }

  renderStuffs() {
    return (
      <div>
        {this.state.portos.map(portos => (
          <div key={portos.numberOrder} className="projectContainer">
            <div className="numberContainer">
              <img
                alt={portos.title}
                src={portos.image}
                className="portoImage"
              />
            </div>
            <div className="detailContainer">
              <div className="titleContainer">
                <a href={portos.url}>
                  <u>{portos.title}</u>
                </a>
              </div>
              <div className="description">{portos.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <ProjectPageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jonathan Filbert | Projects</title>
          <meta
            name="description"
            content="A list of Jonathan Filbert's multi-disciplinary projects from web development, design, and leadership."
          />
        </Helmet>
        <div className="WholeContainer">
          {this.state.isLoading ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
              }}
            >
              <div className="legends">
                <div>
                  <Skeleton width={300} height={25} duration={0.4} />
                </div>
              </div>
              <div className="projectContainer">
                <div className="numberContainer">
                  <Skeleton circle width={60} height={60} duration={0.4} />
                </div>
                <div className="detailContainer">
                  <div className="titleContainer">
                    <Skeleton width={200} height={20} duration={0.4} />
                  </div>
                  <div className="description">
                    <Skeleton width={200} height={25} duration={0.4} />
                  </div>
                </div>
              </div>
              <div className="legends">
                <div>
                  <Skeleton width={300} height={25} duration={0.4} />
                </div>
              </div>
              <div className="projectContainer">
                <div className="numberContainer">
                  <Skeleton circle width={60} height={60} duration={0.4} />
                </div>
                <div className="detailContainer">
                  <div className="titleContainer">
                    <Skeleton width={200} height={20} duration={0.4} />
                  </div>
                  <div className="description">
                    <Skeleton width={200} height={25} duration={0.4} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            this.renderStuffs()
          )}
        </div>
      </ProjectPageContainer>
    );
  }
}

export default ProjectPage;
