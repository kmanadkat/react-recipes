import React, { useContext } from 'react'
import { ThemeContext } from '../useTheme'

const Container = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<div
			className={`h-full p-6 capitalize ${
				theme === 'dark' ? 'bg-slate-700 text-gray-100' : ''
			}`}
		>
			<h2 className='text-xl font-bold mb-8'>{theme} Mode</h2>
			<p className='mb-2'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, harum
				provident. Tempora facilis, fuga, ducimus inventore voluptatem veritatis
				minus ipsum, eos dolor nulla expedita reiciendis mollitia placeat amet
				repudiandae neque.
			</p>
			<p className='mb-2'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
				iste!
			</p>
			<button
				className={`mt-8 ${theme === 'dark' ? 'bg-gray-200 text-black' : ''}`}
				onClick={() => toggleTheme()}
			>
				Toggle Theme
			</button>
		</div>
	)
}

export default Container
