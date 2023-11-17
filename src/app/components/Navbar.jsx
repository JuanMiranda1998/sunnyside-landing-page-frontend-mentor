'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import NavBtn from './NavBtn'
import MenuOverlay from './MenuOverlay'
import NavLink from './NavLink'
import { motion } from 'framer-motion'

const toggleState = (state, changeStateFn) => {
  changeStateFn(!state)
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  }
  const navLinks = [
    {name:'About', path: '#'},
    {name: 'Services', path: '#'},
    {name: 'Projects', path: '#'},
  ]

  return (
    <nav className='w-full absolute'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 md:px-8 py-4 lg:py-8 lg:px-10'>
          <Image
              src='/images/logo.svg'
              width={170}
              height={170}
              alt='sunnyside logo'
          />
          <div className='menu hidden md:block md:w-auto md:pr-4'>
            <ul className='flex items-center md:flex-row md:space-x-10'>
              {navLinks.map(link=><li key={link.name}><NavLink className='text-white' href={link.path} title={link.name} /></li>)}
              <NavBtn text='Contact' />
            </ul>
          </div>
          <button className={`md:hidden ${menuOpen?'transition-opacity ease-in-out delay-200 opacity-50':''}`} onClick={()=>{toggleState(menuOpen, setMenuOpen)}}>
            <Image
                src='/images/icon-hamburger.svg'
                alt='menu icon'
                width={25}
                height={25}
            />
          </button>
        </div>
        {menuOpen&&
        <motion.div
          variants={cardVariants}
          initial='initial'
          animate={menuOpen ? 'animate' : 'initial'}
          transition={{ duration: 0.3 }}
          className='relative'
        >
          <MenuOverlay links={navLinks} />
        </motion.div>
        }
    </nav>
  )
}

export default Navbar