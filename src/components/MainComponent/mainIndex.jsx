import React from 'react'
import NavIndex from '../NavbarComponent/navIndex'
import Items from './items'

const MainIndex = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <NavIndex />
                <Items />
            </div>
        </>
    )
}

export default MainIndex