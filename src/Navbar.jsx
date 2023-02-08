import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<header>
			<nav className='bg-gray-800 py-6 text-gray-400'>
				<div className='max-w-7xl flex mx-auto items-center'>
					<Link to='/' className='navbrand text-gray-200 font-mono'>
						React Recipes
					</Link>

					<ul className='nav-items flex flex-shrink ml-auto gap-8'>
						<li>
							<NavLink to='/Redux'>Redux</NavLink>
						</li>
						<li>
							<NavLink to='/context'>Context</NavLink>
						</li>
						<li>
							<NavLink to='/performance'>Performance</NavLink>
						</li>
						<li>
							<NavLink to='/Testing'>Testing</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
