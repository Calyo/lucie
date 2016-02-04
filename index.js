import React from 'react'
import ReactDOM from 'react-dom'

import Input from './src/Input'
import ClearButton from './src/ClearButton'
import HiLabel from './src/HiLabel'

const createState = (name) => {
  return {name}
}

var App = React.createClass({
  getInitialState: function() {
    return createState('Lucie')
  },

  updateName: function(event) {
    this.setState(createState(event.target.value))
  },

  clear: function() {
    this.setState(createState(''))
  },

  render: function() {
    return (
      <div>
        <HiLabel name={this.state.name} />
        <Input text={this.state.name}
               updateName={(event) => this.updateName(event)} />
        <ClearButton clear={this.clear} />
      </div>
    )
  }
})

ReactDOM.render(<App/>, document.getElementById('content'));
