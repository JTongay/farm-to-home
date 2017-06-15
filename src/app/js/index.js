import React from 'react'
import ReactDOM from 'react-dom'

import Main from './Main'

export default class App extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <Main />
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
