/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {MenuIcon} from '@heroicons/react/outline'
function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6  bg-discord_blue">
        <a href="/">
            <img src="data:image/png;base64,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"
            alt="discord logo"
            className="w-32 h-12 object-contain"/>
        </a>
        
        <div className="hidden lg:flex space-x-6 text-white">
            <a  className="link">Why Discord</a>
            <a  className="link">Download</a>
            <a  className="link">Safety</a>
            <a  className="link">Tools</a>
            <a  className="link">Security</a>
        </div>
        <div className="flex space-x-4">
            <button className="bg-white p-3 rounded-full text-xs md:text-lg-px-4  focus:outline-none text-black hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium">Login</button>
           <MenuIcon className="h-9 text-white cursor-pointer lg:hidden"/>
        </div> 

     </header>
  )
}

export default Header
