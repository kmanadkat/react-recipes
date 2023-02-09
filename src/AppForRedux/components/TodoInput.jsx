import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodo } from '../redux/featureTodo/service'

const TodoInput = () => {
	const [todoIdInput, setTodoIdInput] = useState('')
	const dispatch = useDispatch()

	const handleChange = (event) => {
		const id = event.target.value
		setTodoIdInput(id)
	}

	const handleFetch = () => {
		if (todoIdInput) {
			dispatch(fetchTodo(todoIdInput))
		}
	}

	return (
		<div>
			<label
				htmlFor='todoId'
				className='block text-lg text-gray-600 font-bold mb-2'
			>
				Todo Id
			</label>
			<input
				id='todosId'
				type='text'
				value={todoIdInput}
				onChange={handleChange}
				className='block px-4 py-2 outline-none'
			/>
			<button className='mt-5' onClick={handleFetch}>
				Fetch Todo
			</button>
		</div>
	)
}

export default TodoInput
