import React, { useState } from 'react'
import { ReactComponent as Sun } from '../../assets/images/Sun.svg'
import { ReactComponent as Moon } from '../../assets/images/Moon.svg'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

const Theme = () => {
  const [theme, setTheme] = useState('dark')

  const setThemeColor = () => {
    document.querySelector('body').setAttribute('theme', theme)
  }

  setThemeColor()

  const toggleTheme = (e) => {
    if(theme === 'dark') setTheme('light');
    else setTheme('dark');

    setThemeColor();
  }

  return (
    <div className="dark_mode" onClick={toggleTheme}>
      {theme === 'light' ? <FontAwesomeIcon icon={faMoon} color='#022c43' /> : <FontAwesomeIcon icon={faSun} color='#E8EAF6' />}
    </div>
  )
}

export default Theme
