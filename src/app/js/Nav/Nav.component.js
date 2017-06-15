import React from 'react'

export default class NavbarComponent extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Navigation</a>
          </div>
        </div>
      </nav>
    )
  }

}
