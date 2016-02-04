import React from 'react'

import Input from './components/Input'
import ClearButton from './components/ClearButton'
import HiLabel from './components/HiLabel'

const createState = (name) => {
  return {name}
}

export default React.createClass({
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
