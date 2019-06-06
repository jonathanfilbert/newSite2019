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
        <div>
          {this.state.updates.map(updates => (
            <h1 key={updates.time}>{updates.update}</h1>
          ))}
        </div>
      </LifeUpdateContainer>
    );
  }
}

export default LifeUpdate;
