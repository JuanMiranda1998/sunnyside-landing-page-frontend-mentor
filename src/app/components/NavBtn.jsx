import React from 'react'

const NavBtn = ({text}) => {
  return (
    <button className='cursor-pointer hover:bg-[#6dceff] hover:text-white bg-white font-title uppercase text-[#24303d] text-sm rounded-full px-6 py-4'>
        {text}
    </button>
  )
}

export default NavBtn