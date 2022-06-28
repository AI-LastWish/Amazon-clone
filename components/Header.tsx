import React from 'react'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header>
      {/* Top nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit="contain"
            className='cursor-pointer'
          />
        </div>

        {/* Search */}
        <div className='bg-yellow-400 hover:bg-yellow-500 cursor-pointer 
          hidden sm:!flex items-center h-10 rounded-md flex-grow'>
          <input className='p-2 h-full flex-grow flex-shrink 
            rounded-l-md focus:outline-none px-4' type="text" />
          <SearchIcon className='h-12 p-4' />
        </div>
      </div>


      {/* Button nav */}

    </header>
  )
}

export default Header