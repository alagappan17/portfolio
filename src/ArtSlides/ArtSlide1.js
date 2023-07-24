import React from 'react'
import DadJokes from './ArtComponents/DadJokes'

const ArtSlide1 = () => {
  return (
    <div className='slideArea'>
        <div className='artLoadingSlide fadeInRight subSlide'>
            <img src='../images/dwight-office.gif' />
            <h1>This part of the website is still under development ⚠️</h1>
            <h2>While I'm working on it, here is a dad joke for you</h2>
            <DadJokes />
        </div>
    </div>
  )
}

export default ArtSlide1