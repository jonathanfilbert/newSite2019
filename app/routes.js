import React from 'react';
import { Switch, Route } from 'react-router';

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/about" />
    <Route exact path="/projects" />
    <Route exact path="/reading-list" />
    <Route />
  </Switch>
);
