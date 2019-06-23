/**
 *
 * ProjectPage
 *
 */

import React from 'react';
import axios from 'axios';
import { ProjectPageContainer } from './style';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portos: [],
    };
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
        });
      });
  }

  render() {
    return (
      <ProjectPageContainer>
        <div className="WholeContainer">
          <div className="legends">
            <div>
              🎨 = Design | 💻 = Development | 🤝 = social | ✏️ = leadership
            </div>
          </div>
          {this.state.portos.map(portos => {
            return (
              <div key={portos.numberOrder} className="projectContainer">
                <div className="numberContainer">
                  {this.emojiPicker(portos.category)}
                </div>
                <div className="detailContainer">
                  <div className="titleContainer">
                    <a style={{ color: 'black' }} href={portos.url}>
                      <u>{portos.title}</u>
                    </a>
                  </div>
                  <div className="description">{portos.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </ProjectPageContainer>
    );
  }
}

export default ProjectPage;
