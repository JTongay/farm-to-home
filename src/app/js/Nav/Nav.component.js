import React from 'react'

export default class NavbarComponent extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <img alt="Brand" src="...">
            </a>
          </div>
        </div>
      </nav>
    )
  }

}
