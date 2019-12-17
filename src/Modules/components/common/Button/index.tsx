import React from 'react'
import './Button.scss'

type ButtonProps = {
  text?: string
  onClick(): void
}

const Button: React.FC<ButtonProps> = ({ onClick, text = 'Go Back' }) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
