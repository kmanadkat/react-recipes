import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<header>
			<nav className='bg-gray-800 py-6 text-gray-400'>
				<div className='max-w-[84rem] flex mx-auto items-center px-4'>
					<Link
						to='/react-recipes/'
						className='navbrand text-gray-200 font-mono'
					>
						React Recipes
					</Link>

					<ul className='nav-items flex flex-shrink ml-auto gap-8'>
						<li>
							<NavLink to='/react-recipes/Redux'>Redux</NavLink>
						</li>
						<li>
							<NavLink to='/react-recipes/context'>Context</NavLink>
						</li>
						<li>
							<NavLink to='/react-recipes/suspense'>Suspense</NavLink>
						</li>
						<li>
							<NavLink to='/react-recipes/performance'>Performance</NavLink>
						</li>
						<li>
							<NavLink to='/react-recipes/Testing'>Testing</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
