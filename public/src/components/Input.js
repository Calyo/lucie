import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <input type="text"
             onChange={this.props.updateName}
             value={this.props.text}
      />
    )
  }
})
