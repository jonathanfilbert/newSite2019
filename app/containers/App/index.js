import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../../global-styles';
const Home = lazy(() => import('components/Home'));
const About = lazy(() => import('components/About'));
const ProjectPage = lazy(() => import('../../components/ProjectPage'));
const BookPage = lazy(() => import('../../components/BookPage'));

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
          <Suspense
            fallback={
              <Loader
                id="app"
                type="Rings"
                color="#aaaaaa"
                height="100"
                width="100"
              />
            }
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={ProjectPage} />
              <Route exact path="/reading-list" component={BookPage} />
              <Route component={NotFoundPage} />?
            </Switch>
          </Suspense>
          {
            // eslint-disable-next-line react/prop-types
          }
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
