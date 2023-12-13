import React from 'react'
import image from "./images/Movie-Buddy-12-12-2023.png"

const Header = () => {
  return (
    <div className='absolute w-44 px-2 py-8 bg-gradient-to-br from-black z-10'>
<img src={image} alt="Logo" />    </div>
  )
}

export default Header