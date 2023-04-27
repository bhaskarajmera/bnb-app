import React from 'react'
import bnb_app from '../../assets/images/bnb-app.jpg'
import '../../assets/css/styles.css'

const Navbar = () => {
  return (
    <>
        <div className="nav-navbar">
            <nav className="nav-flex h-18 flex justify-between items-center py-3 px-10">
                <div className="bnb">
                    <a>
                        <img width="120" src={bnb_app}/>
                    </a>
                </div>

                <div className="button-group" role="group">
                    <div>
                        Anywhere
                    </div>
                    <div>
                        Any week
                    </div>
                    <div>
                        Add Guest
                    </div>
                    <span className="little-search-icon">
                        <svg className="nav-search-logo" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                            <g fill="none">
                                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 
                                        0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 
                                        4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                                </path>
                            </g>
                        </svg>
                    </span>
                </div>

                <div className='nav-menu-group'>
                    <div className="nav-menu-group1">
                        <button>
                            BNB Home
                        </button>
                    </div>
                    <div className="nav-menu-group2">
                        <button>
                            <div>
                                <svg className="nav-world-logo" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                                    <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 
                                            7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 
                                            2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 
                                            0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 
                                            0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 
                                            6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 
                                            5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 
                                            5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z">
                                    </path>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className='nav-menu-group3'>
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button">
                            <div className="space-y-2">
                                <svg className="nav-burger-logo" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                                    <g fill="none" fillRule="nonzero">
                                        <path d="m2 16h28"></path>
                                        <path d="m2 24h28"></path>
                                        <path d="m2 8h28"></path>
                                    </g>
                                </svg>
                            </div>
                            <span>
                                <svg className="nav-user-logo" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 
                                        15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 
                                        28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 
                                        6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 
                                        6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 
                                        12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar