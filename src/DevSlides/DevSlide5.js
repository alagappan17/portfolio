import React from 'react'
import NowPlaying from './NowPlaying'

const DevSlide5 = () => {
    return (
    <section id='slide-2' className='slideArea'>
      <div className='subSlide slide-2-props slide-left'>
        <p>
          With a keen <br /> eye for <span> aesthetics </span> <br /> added to a <br /> strong <span> technical foundation </span> <br /> I strive to create <br /> visually <span> captivating experiences</span> <br /> that seamlessly merge<br /> <span> form and function</span> 
        </p>
      </div>
      <div className='subSlide slide-2-right slide-right'>
        {/* <ModelViewer scale=".008" modelPath={"./models/car_anim.glb"} /> */}
        {/* <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/1BYFqAprvayu7YyuQlhboF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        {/* <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/1BYFqAprvayu7YyuQlhboF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
      </div>
      <NowPlaying />
    </section>
      )
}

export default DevSlide5