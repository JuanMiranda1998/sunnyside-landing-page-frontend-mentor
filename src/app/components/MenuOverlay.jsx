import React from 'react'
import NavLink from './NavLink'


const MenuOverlay = ({links}) => {
  return (
    <div className='absolute right-5 top-5 bg-white md:hidden px-[6.5rem] py-16' >
        <div className='absolute h-0 w-0 right-0 top-[-15px] border-y-[15px] border-y-transparent border-r-[15px] border-r-white'></div>
          <ul className='flex flex-col gap-6 text-center'>
              {links.map(link=><li className='text-[var(--clr-neutral-dark-grayish-blue)]' key={link.name}><NavLink href={link.path} title={link.name} /></li>)}
              <li><button className='bg-[#fbd601] text-[var(--clr-neutral-very-dark-desatured-blue)] px-6 py-3 mt-1 rounded-full uppercase' style={{fontFamily:'var(--ff-accent)', fontWeight:'var(--fw-bold)'}}>Contact</button></li>
          </ul>
    </div>
  )
}

export default MenuOverlay