import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-black">
        <a href="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiUxyDTBu4dkC8f3tBeOzM8b0sEnK_8iLUg&usqp=CAU"
            alt="discord logo"
            className="w-32 h-12 object-contain"/>
        </a>
         <div classsName="hidden lg:flex space-x-6 text-white">
            <a  clasName="link">Why Discord</a>
            <a  clasName="link">Nitro</a>
            <a  clasName="link" >Download</a>
            <a  clasName="link">Safety</a> 
            <a  clasName="link"> Support</a>
        </div>

     </header>
  )
}

export default Header
