import Image from 'next/image'
import React from 'react'
import CardButton from './CardButton'

const DoubleCard = ({ cardContent, inverted, cardTheme }) => {
  return (
    <div className= {`flex flex-col ${inverted?'sm:flex-row-reverse':'sm:flex-row'} bg-white text-[var(--clr-neutral-very-dark-desatured-blue)] col-span-2 `}>
        <div className='sm:w-[50%] col-span-1'>
            <Image 
                className='md:hidden w-full h-full'
                width={800}
                height={800}
                src={cardContent.imgUrl.mobile}
                alt={cardContent.imgDescription}
            />
            <Image 
                className='hidden md:block w-full h-full'
                width={2000}
                height={2000}
                src={cardContent.imgUrl.desktop}
                alt={cardContent.imgDescription}
            />
        </div>
        <div className=' sm:w-[50%] col-span-1 px-8 lg:px-32 py-16 text-center md:text-left flex flex-col justify-center'>
            <h2 className=' text-3xl font-title mb-4' style={{fontWeight: 'var(--fw-black)'}}>{cardContent.title}</h2>
            <p className=' p-1 text-[var(--clr-neutral-dark-grayish-blue)] text-[.825rem] font-bold leading-7'
            >{cardContent.content}</p>
            <div className='relative flex flex-col items-center justify-center md:items-start mt-10 mb-2'>
                <CardButton text={cardContent.btnText} decorationColor={cardTheme} />
            </div>
        </div>
    </div>
  )
}

export default DoubleCard