import React from 'react'

const DevSlide1 = () => {
  return (
    <section id='slide-1' className='slideArea'>
        <div className='subSlide slide-1-props slide-left'>
        <div class="cardImage">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="card-inner">
           <img alt='DevLogo' src='./images/Alagappan_PFP_45.jpeg' style={{width: '100%'}}/>
          </div>
        </div>
          {/* <img alt='DevLogo' src='./images/SkidMaskFinal.png'/> */}
        </div>
        <div className='subSlide slide-1-props slide-right'>
        <h1 className='rotate nine fadeInRight'>Hi! I am&nbsp;
            <span>A</span>
            <span>l</span>
            <span>a</span>
            <span>g</span>
            <span>a</span>
            <span>p</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span id='star'>✨</span>
        </h1>
        <p className='fadeInRight'>Driven by the passion for<br />Design, Development & Digital Art,<br /> I blend my logical and creative personas towards <br />building software solutions that are as efficient as<br />a caffeine-fueled coder during a hackathon.</p>
        </div>
    </section>
  )
}

export default DevSlide1