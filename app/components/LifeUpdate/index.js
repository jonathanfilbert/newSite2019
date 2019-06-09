/**
 *
 * LifeUpdate
 *
 */

import React from 'react';
import axios from 'axios';
import { LifeUpdateContainer } from './style';

class LifeUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://dementorjofil.herokuapp.com/get-activities/')
      .then(response => {
        this.setState({
          updates: response.data,
        });
      });
  }

  render() {
    return (
      <LifeUpdateContainer>
        <div className="updateContainer">
          <div className="updateTitle">Updates</div>
          {this.state.updates.map(updates => (
            <div key={updates.time} className="flexContainer">
              <div className="updateTime">{updates.time}</div>
              <div className="updateName">{updates.update}</div>
            </div>
          ))}
        </div>
      </LifeUpdateContainer>
    );
  }
}

export default LifeUpdate;
