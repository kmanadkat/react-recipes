import React from 'react'
import { useDispatch } from 'react-redux'
import { remove, update } from '../redux/featureTodo/slice'

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch()

	const handleRemoveFromStore = (id) => {
		dispatch(remove(id))
	}

	const handleUpdateTodo = (id, status) => {
		dispatch(update({ id, status }))
	}
	return (
		<li
			key={todo.id}
			className='shadow-sm px-6 py-4 bg-white flex items-start gap-8 mb-4'
		>
			<button
				className='bg-white'
				onClick={() => handleRemoveFromStore(todo.id)}
			>
				🗑️
			</button>
			<div>
				<span className='text-sm text-gray-400'>{todo.id}</span>
				<h3>{todo.title}</h3>
				<p className='text-sm mt-2'>
					Completed: {todo.completed ? 'true' : 'false'}
				</p>
			</div>
			<div className='ml-auto'>
				<label htmlFor={`${todo.id}-completion`} className='mr-2'>
					Completed
				</label>
				<input
					id={`${todo.id}-completion`}
					type='checkbox'
					defaultChecked={todo.completed}
					onChange={() => handleUpdateTodo(todo.id, !todo.completed)}
				/>
			</div>
		</li>
	)
}

export default TodoItem
