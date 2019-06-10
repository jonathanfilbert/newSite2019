import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Home from 'components/Home';
// import Navbar from 'components/Navbar';
// import About from 'components/About';
// import Footer from 'components/Footer';
import { connect } from 'react-redux';

import GlobalStyle from '../../global-styles';
const Home = lazy(() => import('components/Home'));
const Navbar = lazy(() => import('components/Navbar'));
const About = lazy(() => import('components/About'));
const Footer = lazy(() => import('components/Footer'));
const ProjectPage = lazy(() => import('../../components/ProjectPage'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>Wait......</div>}>
          <Router>
            <Navbar />
            <div
              className={this.props.toggled ? 'hidden' : 'shown'}
              style={{ minHeight: '100vh' }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={ProjectPage} />
                <Route component={NotFoundPage} />?
              </Switch>
            </div>
          </Router>
          <Footer />
          <GlobalStyle />
        </Suspense>
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
