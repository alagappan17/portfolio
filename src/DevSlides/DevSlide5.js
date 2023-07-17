import React from 'react'
import NowPlaying from './NowPlaying'
import EmailForm from './EmailForm'
import MediumArticles from './MediumArticles'
import SpotifyTopList from './SpotifyTopList'
import MyPlaylist from  './MyPlaylist'

const DevSlide5 = () => {
    return (
    <section id='slide-5' className='slideArea'>
      <div className='subSlide slide-left'>
        <EmailForm />
      </div>
      <div className='subSlide slide-right slide-5-interactive'>
        <h1>I'll get back to you ASAP!</h1>
        {/* <h1>I'll get back to you ASAP!</h1> */}
        <h2>Jam to my favourite music, until I return</h2>
        <div className='spotifyContent'>
          <NowPlaying />
          {/* <SpotifyTopList /> */}
          <MyPlaylist />
        </div>
        <h2>Or give my Blogs a read</h2>
        <div className='mediumContent'>
          <MediumArticles />
        </div>
      </div>
    </section>
      )
}

export default DevSlide5