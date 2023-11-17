import React from 'react'

const CardButton = ({text, decorationColor}) => {
  return (
          <a href='#' className='group absolute z-10 text-md uppercase font-title font-black'>
            {text}
            <span className='-z-20 h-2 w-32 mt-[-12px] opacity-30 group-hover:opacity-80 cursor-pointer transition ease-in delay-150 absolute left-[-5px] bottom-[2px] rounded-md' style={{backgroundColor: decorationColor}}></span>
          </a>
  )
}

export default CardButton