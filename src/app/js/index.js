import React from 'react'
import ReactDOM from 'react-dom'

export default class App extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <h1>Booyah</h1>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
