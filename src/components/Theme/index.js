import React from 'react'
import { ReactComponent as Sun } from '../../assets/images/Sun.svg'
import { ReactComponent as Moon } from '../../assets/images/Moon.svg'
import './index.scss'

const Theme = () => {
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('theme', 'dark')
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute('theme', 'light')
  }

  setLightMode()

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode()
    else setLightMode()
  }

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  )
}

export default Theme
