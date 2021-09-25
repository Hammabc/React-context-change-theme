import React, { useContext } from "react"
import { Button } from "react-bootstrap"
import ThemeContext from '../context/ThemeContext';
import Moon from '../images/moon.svg';
import Sun from '../images/sun.svg';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="button-theme"
    >
      <img
        src={theme ==="dark" ? Moon : Sun}
        className="theme-icon"
        alt="theme"
      />
      Change theme
    </Button>
  )
}

export default ThemeSwitcher
