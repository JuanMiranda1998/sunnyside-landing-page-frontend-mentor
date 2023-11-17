import React from 'react'
import Testimonial from './Testimonial'

const TestimonialSection = () => {
  const testimonials = [
    {
      avatarUrl: '/images/image-emily.jpg',
      content: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      author: 'Emily R.',
      role:'Marketing Director',
    },
    {
      avatarUrl: '/images/image-thomas.jpg',
      content: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      author: 'Thomas S.',
      role:'Chief Operating Officer',
    },
    {
      avatarUrl: '/images/image-jennie.jpg',
      content: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      author: 'Jennie F.',
      role:'Business Owner',
    }
  ]
  return (
    <div className='py-10 pb-20 md:py-28 px-4 bg-[var(--clr-neutral-white)] text-center text-[var(--clr-neutral-very-dark-desatured-blue)] '>
        <h1 className='text-[1.125rem] font-title text-[var(--clr-neutral-grayish-blue)] uppercase my-5' style={{fontWeight: 900, letterSpacing: '2px'}}>Client testimonials</h1>
        <div className='flex flex-col md:flex-row md:justify-center gap-8'>
          {testimonials.map((testimonial,index)=><Testimonial key={index} testimonialContent={testimonial} />)}
        </div>
    </div>
  )
}

export default TestimonialSection