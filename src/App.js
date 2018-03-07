import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'

import configureStore from './store/configureStore'
import Home from './components/Home'
import Requirement from './components/Requirement'
import './App.css'

const store = configureStore()
const theme = createMuiTheme()

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Reboot />
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
  </MuiThemeProvider>
)

export default App
