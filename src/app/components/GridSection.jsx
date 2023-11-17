import React from 'react'
import DoubleCard from './DoubleCard'
import SingleCard from './SingleCard'



const cards = [
    {
        title: 'Transform your brand',
        content: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
        btnText: 'Learn more',
        imgUrl: {mobile: '/images/mobile/image-transform.jpg', desktop: '/images/desktop/image-transform.jpg'},
        imgDescription: 'Picture of an egg.'
    },
    {
        title: 'Stand out to the right audience',
        content: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
        btnText: 'Learn more',
        imgUrl: {mobile: '/images/mobile/image-stand-out.jpg', desktop: '/images/desktop/image-stand-out.jpg'},
        imgDescription: 'Picture of an cup.'
    },
    {
        title: 'Graphic design',
        content: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
        imgUrl: {mobile: '/images/mobile/image-graphic-design.jpg', desktop: '/images/desktop/image-graphic-design.jpg'},
        imgDescription: 'Picture of cherries.',
        tag: 'graphicDesign',
    },
    {
        title: 'Photography',
        content: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
        imgUrl: {mobile: '/images/mobile/image-photography.jpg', desktop: '/images/desktop/image-photography.jpg'},
        imgDescription: 'Picture of an orange.',
        tag: 'photography',
    }
]

const GridSection = () => {
  return (
    <div className='grid grid-cols-2'>
        <DoubleCard cardContent={cards[0]} inverted={true} cardTheme='var(--clr-primary-yellow)' />
        <DoubleCard cardContent={cards[1]} inverted={false} cardTheme='var(--clr-primary-soft-red)' />
        <SingleCard cardContent={cards[2]} textColor='var(--clr-primary-desatured-cyan)' />
        <SingleCard cardContent={cards[3]} textColor='var(--clr-primary-dark-blue)' />
    </div>
  )
}

export default GridSection