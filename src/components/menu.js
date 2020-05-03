import React, { useState } from 'react';
import { Link } from "gatsby";
import "../css/tailwind.css";

const Menu = () => {

    const [isExpanded, toggleExpansion] = useState(false)

    return(
        <nav className="flex items-center justify-between flex-wrap bg-pink-600 p-6">
           <div className="flex container mx-auto items-center justify-between flex-wrap">
           <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-4xl tracking-tight">Mathe Nerd</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-40`}>
                <div className="text-lg lg:text-xl lg:flex-grow">
                <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-10">Home</Link>
                <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-10">About</Link>
                <Link to="/formelsammlung" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-10">Formelsammlung</Link>
                <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-10">Blog</Link>
                </div>
            </div>
            </div>
        </nav>

    )
} 


export default Menu