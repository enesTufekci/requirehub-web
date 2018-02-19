import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Home from './components/Home';
import Case from './components/Case';

import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/case/:id" component={Case} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
)

export default App;
