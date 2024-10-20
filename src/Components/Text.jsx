import React from 'react'

function Text(props) {
  return (
    <p {...props}>{props.children}</p>
  )
}

export default Text