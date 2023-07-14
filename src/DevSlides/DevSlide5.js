import React from 'react'
import NowPlaying from './NowPlaying'
import EmailForm from './EmailForm'

const DevSlide5 = () => {
    return (
    <section id='slide-5' className='slideArea'>
      <div className='subSlide slide-left'>
        <EmailForm />
      </div>
      <div className='subSlide slide-right'>
        <NowPlaying />
      </div>
    </section>
      )
}

export default DevSlide5