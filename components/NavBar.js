import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex gap-2 justify-between z-10 p-5'>
      <div className='flex items-center gap-2'>
        <Image src={'/logo.png'} width={50} height={50} alt='logo'/>
        <h1 className='text-2xl font-bold text-white uppercase'>Vox AI</h1>
      </div>
      <p className='font-bold capitalize max-md:hidden'>by sam uwayo</p>
    </div>
  )
}

export default NavBar