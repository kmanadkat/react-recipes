import React, { memo } from 'react'

const SimpleCounter = ({ count, handleCounter }) => {
	return (
		<div className='counter text-center'>
			<h2 className='text-green-700'>Counter</h2>
			<p className='text-center'>{count}</p>
			<button onClick={handleCounter}>Increment</button>
		</div>
	)
}

export default memo(SimpleCounter)
