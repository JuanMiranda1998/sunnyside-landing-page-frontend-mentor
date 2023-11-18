'use client'
import React from 'react';
import Navbar from "./Navbar";
import Image from 'next/image';
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <section className='w-full'>
        <Navbar />
        <div className='flex justify-center bg-cover bg-no-repeat bg-center bg-[url("/images/mobile/image-header.jpg")] md:bg-[url("/images/desktop/image-header.jpg")] py-36 md:pt-48
        md:pb-64'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center justify-center gap-11 mt-3 md:mt-0 md:mb-24'
          >
            <h1 className=' text-4xl md:text-6xl text-center uppercase' style={{fontFamily: 'var(--ff-accent)', fontWeight:'var(--fw-black)', letterSpacing: '8px'}}>We are Creatives</h1>
            <Image
            className=''
              src='/images/icon-arrow-down.svg'
              alt='arrow down'
              width={60}
              height={180}
            />
          </motion.div>
        </div>
    </section>
  )
}

export default Header