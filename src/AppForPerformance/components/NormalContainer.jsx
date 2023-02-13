import React, { useState } from 'react'
import { expensiveFibonacci } from '../utils'
import FibonacciCounter from './FibonacciCounter'
import SimpleCounter from './SimpleCounter'

const NormalContainer = () => {
	const [fibCounter, setFibCounter] = useState(0)
	const [count, setCounter] = useState(0)

	const fibValue = expensiveFibonacci(fibCounter)

	// Donot create new copy of this function on re-renders
	const handleCounter = () => {
		setCounter((initial) => initial + 1)
	}

	return (
		<div>
			<h1>Not Optimized</h1>
			<div className='flex gap-48'>
				<FibonacciCounter
					fibCounter={fibCounter}
					setFibCounter={setFibCounter}
					fibValue={fibValue}
					headingColor='text-orange-700'
				/>
				<SimpleCounter count={count} handleCounter={handleCounter} />
			</div>
		</div>
	)
}

export default NormalContainer
