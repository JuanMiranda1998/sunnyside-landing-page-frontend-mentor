import React from 'react'

const SingleCard = ({ cardContent, textColor }) => {

  return (
    <div className={`singleCard${cardContent.tag} flex flex-col col-span-2 md:col-span-1 px-6 h-[500px] lg:h-[600px] justify-end items-center`}>
        <div className='mt-2 text-center max-w-md'>
          <h2 className='mb-5 font-title text-3xl lg:text-4xl font-black capitalize'>{cardContent.title}</h2>
          <p className='mb-10 md:mb-12 lg:mb-20 md:px-12 text-sm lg:text-md font-bold leading-7'>{cardContent.content}</p>
        </div>
        <style>
          {`
          .singleCard${cardContent.tag}{background-image: url(${cardContent.imgUrl.mobile});background-size: cover;background-position: center;background-repeat: no-repeat;color: ${textColor};}
          @media (min-width:500px){.singleCard${cardContent.tag}{background-image: url(${cardContent.imgUrl.desktop});}}
          `}
        </style>
    </div>
  )
}

export default SingleCard