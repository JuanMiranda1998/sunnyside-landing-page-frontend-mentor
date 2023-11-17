import Image from 'next/image'
import React from 'react'

const Testimonial = ({testimonialContent}) => {
  return (
    <div className='flex flex-col items-center md:max-w-xs'>
            <div className='my-6 rounded-full overflow-hidden'>
                <Image 
                    width={70}
                    height={70}
                    src={testimonialContent.avatarUrl}
                    alt={`${testimonialContent.author} avatar`}
                />
            </div>
            <p className='mb-4 px-6 md:px-0 text-[.925rem] leading-7 text-[var(--clr-neutral-very-dark-grayish-blue)] font-bold'>{testimonialContent.content}</p>
            <h2 className=' font-title mb-2 font-black md:text-lg md:mt-10'>{testimonialContent.author}</h2>
            <h3 className='text-[var(--clr-neutral-grayish-blue)] text-xs font-bold'>{testimonialContent.role}</h3>
        </div>
  )
}

export default Testimonial