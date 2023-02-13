import React, { memo } from 'react'

const FibonacciCounter = ({ fibCounter, setFibCounter, fibValue }) => {
	const handleFibIncrement = () => {
		setFibCounter((initial) => initial + 5)
	}

	const handleFibDecrement = () => {
		setFibCounter((initial) => initial - 5)
	}

	return (
		<div className='fib-counter text-center'>
			<h2 className='text-orange-700'>Fibonacci of {fibCounter}</h2>
			<p>{fibValue}</p>
			<button className='mx-auto my-3' onClick={handleFibIncrement}>
				Increment by 5
			</button>
			<button className='mx-auto my-3' onClick={handleFibDecrement}>
				Decrement by 5
			</button>
		</div>
	)
}

export default memo(FibonacciCounter)
