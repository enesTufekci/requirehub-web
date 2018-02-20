import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Home from './components/Home';
import Requirement from './components/Requirement';

import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/requirement/create" component={Requirement} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
)

export default App;
