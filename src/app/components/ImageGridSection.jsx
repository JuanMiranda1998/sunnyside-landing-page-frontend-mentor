import Image from 'next/image'
import React from 'react'


const ImageGridSection = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4'>
        <Image src='/images/mobile/image-gallery-milkbottles.jpg' alt='milkbottles image' width={1000} height={1000} />        
        <Image src='/images/mobile/image-gallery-orange.jpg' alt='orange image' width={1000} height={1000} />        
        <Image src='/images/mobile/image-gallery-cone.jpg' alt='cone image' width={1000} height={1000} />        
        <Image src='/images/mobile/image-gallery-sugar-cubes.jpg' alt='sugar cubes image' width={1000} height={1000} />        
    </div>
  )
}

export default ImageGridSection