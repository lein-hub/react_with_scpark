import React from 'react'

const Button = ({text, onAdd}) => {
  return (
    <button className='btn'
      style={{backgroundColor: 'green'}}
      onClick={onAdd}>{text}</button>
  )
}

export default Button