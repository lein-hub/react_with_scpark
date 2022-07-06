import React from 'react'
import Button from './Button';

const Header = ({title}) => {
  const onAdd = () => {
    console.log('Add button clicked')
  }
  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button text={"Add"} onAdd={onAdd}></Button>
    </div>
  )
}

export default Header