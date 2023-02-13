import React from 'react'
import { useDispatch } from 'react-redux'
import TodoInput from './components/TodoInput'
import FetchedTodo from './components/FetchedTodo'
import TodosList from './components/TodosList'

const App = () => {
	const dispatch = useDispatch()
	return (
		<div>
			<section className='flex items-start gap-20'>
				<TodoInput dispatch={dispatch} />
				<FetchedTodo dispatch={dispatch} />
			</section>
			<TodosList />
		</div>
	)
}

export default App
