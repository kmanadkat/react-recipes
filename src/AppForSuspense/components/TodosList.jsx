import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { selectAllTodos } from '../redux/featureTodo/selectors'
import { simulateNetwork } from '../utils'

const TodoItem = lazy(() => simulateNetwork(import('./TodoItem')))
// import TodoItem from './TodoItem'

const TodosList = () => {
	const allTodos = useSelector(selectAllTodos)
	return (
		<ul className='mt-12'>
			<Suspense fallback={<p>Loading...</p>}>
				{allTodos.todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</Suspense>
		</ul>
	)
}

export default TodosList
