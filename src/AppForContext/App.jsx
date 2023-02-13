import React from 'react'
import Container from './components/Container'
import useTheme, { ThemeContext } from './useTheme'

const App = () => {
	const themeContextValue = useTheme()

	return (
		<ThemeContext.Provider value={themeContextValue}>
			<Container />
		</ThemeContext.Provider>
	)
}

export default App
