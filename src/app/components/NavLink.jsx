import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, title}) => {
  return (
    <Link className='text-md md:text-lg' href={href}>{title}</Link> 
  )
}

export default NavLink