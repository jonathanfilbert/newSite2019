import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import About from 'components/About';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Router>
        <Route component={Navbar} />
        <div className="haha" style={{ minHeight: '100vh' }}>
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
