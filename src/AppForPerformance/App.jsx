import React from 'react'
import EnhancedContainer from './components/EnhancedContainer'
import NormalContainer from './components/NormalContainer'

const App = () => {
	return (
		<div className='AppForPerformance'>
			<EnhancedContainer />
			<div className='mt-24'>
				<NormalContainer />
			</div>
		</div>
	)
}

export default App
