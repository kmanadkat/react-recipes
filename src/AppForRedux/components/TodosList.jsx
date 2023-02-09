import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTodos } from '../redux/featureTodo/selectors'
import TodoItem from './TodoItem'

const TodosList = () => {
	const allTodos = useSelector(selectAllTodos)
	return (
		<ul className='mt-12'>
			{allTodos.todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	)
}

export default TodosList
