import React from 'react'
import NowPlaying from './DevComponents/Spotify/NowPlaying'
import EmailForm from './DevComponents/EmailForm'
import MediumArticles from './DevComponents/Medium/MediumArticles'
import MyPlaylist from  './DevComponents/Spotify/MyPlaylist'

const DevSlide5 = () => {
    return (
    <section id='slide-5' className='slideArea'>
      <div className='subSlide slide-left'>
        <EmailForm />
      </div>
      <div className='headerShower'>
        <h1>I'll get back to you ASAP! Until then,</h1>
        <p>Jam to my favourite music <span role='img' aria-label='warning' >🎶</span> or give my latest blogs a read <span role='img' aria-label='warning' >📝</span></p>
      </div>
      <div className='subSlide slide-right slide-5-interactive'>
        <h1 className='headerHider eh1'>I'll get back to you ASAP! Until then,</h1>
        <h2 className='headerHider eh2'>Jam to my favourite music <span role='img' aria-label='warning' ></span>🎶</h2>
        <div className='spotifyContent'>
        {/* <h1 id='headerContact'>I'll get back to you ASAP!</h1> */}
          <NowPlaying />
          {/* <SpotifyTopList /> */}
          <MyPlaylist />
        </div>
        <h2 className='headerHider eh2'>Or give my latest blogs a read <span role='img' aria-label='warning' >📝</span></h2>
        <div className='mediumContent'>
          <MediumArticles />
        </div>
      </div>
    </section>
      )
}

export default DevSlide5;