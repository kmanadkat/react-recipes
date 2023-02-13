import React, { useCallback, useMemo, useState } from 'react'
import FibonacciCounter from './components/FibonacciCounter'
import SimpleCounter from './components/SimpleCounter'

const expensiveFibonacci = (n) => {
	if (n <= 1) return n
	return expensiveFibonacci(n - 1) + expensiveFibonacci(n - 2)
}

const App = () => {
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
		<div className='AppForPerformance flex gap-48'>
			<FibonacciCounter
				fibCounter={fibCounter}
				setFibCounter={setFibCounter}
				fibValue={fibValue}
			/>
			<SimpleCounter count={count} handleCounter={handleCounter} />
		</div>
	)
}

export default App
