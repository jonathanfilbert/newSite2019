import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import About from 'components/About';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFoundPage} />?
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}
