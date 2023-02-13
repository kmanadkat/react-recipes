import React, { useCallback, useMemo, useState } from 'react'
import { expensiveFibonacci } from '../utils'
import FibonacciCounter from './FibonacciCounter'
import SimpleCounter from './SimpleCounter'

const EnhancedContainer = () => {
	const [fibCounter, setFibCounter] = useState(0)
	const [count, setCounter] = useState(0)

	// useMemo remembers value from previous render
	// memoized value is discarded if dependency is changed
	const fibValue = useMemo(() => expensiveFibonacci(fibCounter), [fibCounter])

	// ! NOT MEMOIZED - SLOW
	// const fibValue = expensiveFibonacci(fibCounter)

	// Donot create new copy of this function on re-renders
	const handleCounter = useCallback(() => {
		setCounter((initial) => initial + 1)
	}, [])

	return (
		<div>
			<h1>Performance Optimized</h1>
			<div className='flex gap-48'>
				<FibonacciCounter
					fibCounter={fibCounter}
					setFibCounter={setFibCounter}
					fibValue={fibValue}
					headingColor='text-green-700'
				/>
				<SimpleCounter count={count} handleCounter={handleCounter} />
			</div>
		</div>
	)
}

export default EnhancedContainer
