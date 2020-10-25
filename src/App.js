import React from 'react';
import './tailwind.output.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Error from './components/Error';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

