import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { connect } from 'react-redux';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Home from 'components/Home';
import About from 'components/About';
import ProjectPage from 'components/ProjectPage';
import BookPage from 'components/BookPage';
import GlobalStyle from '../../global-styles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <div
          // eslint-disable-next-line react/prop-types
          className={this.props.toggled ? 'hidden' : 'shown'}
          style={{ minHeight: '100vh' }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={ProjectPage} />
            <Route exact path="/reading-list" component={BookPage} />
            <Route component={NotFoundPage} />?
          </Switch>
          <GlobalStyle darkMode={this.props.darkTheme} />
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toggled: state.toggler.toggled,
    darkTheme: state.themeToggler.darkMode,
  };
}

export default connect(
  mapStateToProps,
  null,
)(App);
