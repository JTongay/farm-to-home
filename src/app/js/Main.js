import React from 'react'
// import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom'

//Import Navigation Component
import NavbarComponent from './Nav/Nav.component.js'

//Import Page Components
import Intro from './Components/Intro.component.js'

export default class Main extends React.Component {

  constructor(){
    super()
  }

  render() {
    return (
      <div className="container-fluid">
        <NavbarComponent />
        <Intro />
      </div>
    )
  }
}
