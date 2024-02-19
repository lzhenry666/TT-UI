import React from 'react'
import './Header.css'
import { Sparkle } from 'phosphor-react'
interface HeaderProps {
    title: string
}
const Header = (props:  HeaderProps) => {
  return (
    <div className='timeline-header'>
            <h2>{props.title}</h2>
          <Sparkle/>
          </div>
  )
}

export default Header
