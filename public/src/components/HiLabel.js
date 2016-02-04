import React from 'react'

import style from './HiLabel.css'

export default React.createClass({
  render: function() {
    return (
      <span className={style.full}>
        Coucou {this.props.name} !
      </span>
    )
  }
})

// Syntaxes alternatives et conseillées
// si une classe React n'a que la méthode render, alors on peut faire :

const alternative = (props) => (
  <span className={style.full}>
    Coucou {props.name}
  </span>
)

const alternative2 = ({name}) => (
  <span className={style.full}>
    Coucou {name}
  </span>
)
