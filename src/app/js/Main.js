import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

//Import Navigation Component
import Navbar from './Nav/Nav.component.js'

//Import Page Components

export default class Main extends React.Component {

  constructor(){
    super()
  }

  render () {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={ Navbar }>

        </Route>
      </Router>
    )
  }
})
