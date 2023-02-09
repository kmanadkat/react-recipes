import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFetchedTodo } from '../redux/featureTodo/selectors'
import { add } from '../redux/featureTodo/slice'

const FetchedTodo = () => {
	const singleTodo = useSelector(selectFetchedTodo)
	const dispatch = useDispatch()

	const handleAddToStore = () => {
		dispatch(add())
	}

	return (
		<div>
			{singleTodo.loading && <p>Loading...</p>}

			{singleTodo.loaded && !singleTodo.error && (
				<div>
					<h2 className='text-lg text-gray-600 font-bold mb-2'>
						New Fetched Todo
					</h2>
					<h3 className='block py-2'>{singleTodo.data.title}</h3>
					<button className='mt-4' onClick={handleAddToStore}>
						Add to store
					</button>
				</div>
			)}

			{singleTodo.loaded && singleTodo.error && <p>{singleTodo.error}</p>}
		</div>
	)
}

export default FetchedTodo
