import { createContext, useState } from "react";

export const ThemeContext = createContext()

const useTheme = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme => {
      if (theme === 'light') return 'dark'
      return 'light'
    })
  }

  return {
    theme,
    toggleTheme
  }
}

export default useTheme