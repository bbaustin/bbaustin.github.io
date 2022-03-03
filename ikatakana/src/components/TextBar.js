import React from 'react'

const TextBar = (props) => {
  return (
    <input
      type='text'
      name='title'
      className='midlength'
      value={props.value}
      onChange={props.handleChange}
      autoFocus
    ></input>
  )
}

export default TextBar
