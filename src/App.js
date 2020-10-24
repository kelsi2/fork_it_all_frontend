import React from 'react';
import './App.css';
import Home from './components/Home';
import Error from './components/Error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return(
  <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route component={Error} />
    </Switch>
  </Router>
  );
}

