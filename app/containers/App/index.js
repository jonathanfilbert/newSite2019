import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import About from 'components/About';
import Footer from 'components/Footer';
import { connect } from 'react-redux';

import GlobalStyle from '../../global-styles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <Route component={Navbar} />
          <div
            className={this.props.toggled ? 'hidden' : 'shown'}
            style={{ minHeight: '100vh' }}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route component={NotFoundPage} />?
            </Switch>
          </div>
        </Router>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toggled: state.toggler.toggled,
  };
}

export default connect(
  mapStateToProps,
  null,
)(App);
