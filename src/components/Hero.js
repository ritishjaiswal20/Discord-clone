/* eslint-disable jsx-a11y/alt-text */
import {  DownloadIcon } from '@heroicons/react/outline'
import React from 'react'

function Hero() {
  return (
    <div className="bg-discord_blue pb-8 md:pb-0">
   <div className="p-7 py-9 h-screen md:h-83vh md:flex relative">
       <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center"> 
           <h1 className="text-5xl text-white font-bold">This is place to talk</h1>
           <p className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
         <div className="flex flex-col sm::flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
           <button className="bg-white w-60 font-medium flex itmes-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none trasnition duration-200 ease-in-out">
             <DownloadIcon className="w-6 mr-2"/>
             Download for Mac</button>
           <button className="bg-gray-900  text-white w-72 font-medium flex itmes-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out ">Open discord in your browser</button>
         </div>
       </div>
       {/* <div className="flex-grow">
          <img
            src=""
            alt=""
            className="absolute -left-36 mt-16 sm:-left-44 md:hidden"
          />
          <img
            src="https://rb.gy/gjs8ch"
            alt=""
            className="hidden md:inline absolute"
          />
        </div> */}
   </div>
    </div>
  )
}

export default Hero