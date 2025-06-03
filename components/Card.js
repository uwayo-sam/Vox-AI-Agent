import Image from 'next/image'
import React from 'react'

const Card = ({isuser,className}) => {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg backdrop-blur-lg border-2 border-red-600 shadow-red-400'>
 
    {isuser === 'true' ? <div className={`flex flex-col items-center justify-center gap-2  px-15 py-8  ${className}`}>
       <span className='absolute items-center inline-flex animate-ping size-5/6' />
        <Image src={'/images/user-avater.webp'} width={200} height={200} alt='avater' className='rounded-full border-2 border-red-600' />
         <h1 className='text-2xl font-bold text-white capitalize'>YOU</h1>
    </div> :
    
     <div className={`flex flex-col items-center justify-center gap-2  px-15 py-8`}>
  
         <Image src={'/images/avater.png'} width={200} height={200} alt='avater' className='rounded-full border-2 border-red-600' />
         <h1 className={`text-lg font-bold capitalize`}>vox Doctor</h1>
    </div>}
   
  </div>

  )
}

export default Card