import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'

export class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
        </Switch>
      </div>
    )
  }
}

export default App

