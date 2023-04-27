import React from 'react'
import Navbar from './navbar'
import Category from './category'

const NavIndex = () => {
	return (
		<>
			<div className="nav-wrapper">
				<Navbar />
				<Category />
			</div>
		</>
	)
}

export default NavIndex;