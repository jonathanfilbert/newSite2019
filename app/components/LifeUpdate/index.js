/**
 *
 * LifeUpdate
 *
 */

import React from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { LifeUpdateContainer } from './style';

class LifeUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: [],
      isLoading: true,
    };
    this.renderUpdates = this.renderUpdates.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://dementorjofil.herokuapp.com/get-activities/')
      .then(response => {
        this.setState({
          updates: response.data,
          isLoading: false,
        });
        localStorage.setItem('life', response.data);
      });
  }

  renderUpdates() {
    return this.state.updates.map(updates => (
      <div key={updates.time} className="flexContainer">
        <div className="updateTime">{updates.time || <Skeleton />}</div>
        <div className="updateName">{updates.update || <Skeleton />}</div>
      </div>
    ));
  }

  render() {
    return (
      <LifeUpdateContainer>
        <div className="updateContainer">
          <div className="updateTitle">Updates</div>
          {this.state.isLoading ? (
            <div>
              <div className="flexContainer">
                <div className="updateTime">
                  <Skeleton width={100} />
                </div>
                <div className="updateName">
                  <Skeleton width={150} />
                </div>
              </div>
              <div className="flexContainer">
                <div className="updateTime">
                  <Skeleton width={100} />
                </div>
                <div className="updateName">
                  <Skeleton width={150} />
                </div>
              </div>
              <div className="flexContainer">
                <div className="updateTime">
                  <Skeleton width={100} />
                </div>
                <div className="updateName">
                  <Skeleton width={150} />
                </div>
              </div>
            </div>
          ) : (
            this.renderUpdates()
          )}
        </div>
      </LifeUpdateContainer>
    );
  }
}

export default LifeUpdate;
