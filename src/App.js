import './App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Registration from './Components/Registration';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Registration} />
            <Route path="/users" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;