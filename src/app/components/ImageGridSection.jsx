import Image from 'next/image'
import React from 'react'


const ImageGridSection = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4'>
        <Image src='/images/mobile/image-gallery-milkbottles.jpg' alt='' width={800} height={800} />        
        <Image src='/images/mobile/image-gallery-orange.jpg' alt='' width={800} height={800} />        
        <Image src='/images/mobile/image-gallery-cone.jpg' alt='' width={800} height={800} />        
        <Image src='/images/mobile/image-gallery-sugar-cubes.jpg' alt='' width={800} height={800} />        
    </div>
  )
}

export default ImageGridSection