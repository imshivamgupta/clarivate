import React from 'react'
import { Link } from "react-router-dom";

interface ButtonProps {
    children : React.ReactNode;
    path: string
}


const Button = ({children, path}: ButtonProps) => {
  return (
    <Link to={path}>
        <button className='btn btn-primary'>{children}</button>
    </Link>
  )
}

export default Button