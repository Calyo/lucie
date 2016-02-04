import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <button type="button" onClick={this.props.clear}>
        Clear
      </button>
    )
  }
})
