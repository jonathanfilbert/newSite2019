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
          {this.state.portos.map(portos => {
            return (
              <div key={portos.numberOrder} className="projectContainer">
                <div className="numberContainer">
                  {portos.numberOrder.toUpperCase()}
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
