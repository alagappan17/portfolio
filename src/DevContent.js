import React, { useRef, useEffect, useState } from 'react';
import ModelViewer from './ModelViewer';

const DevContent = () => {
  return (
    <div>
      <div class="scrollCon">
        <section id='slide-1' className='slideArea'>
            <div className='subSlide slide-1-props slide-left'>
              <img alt='DevLogo' src='./images/SkidMaskFinal.png'/>
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
              <p className='fadeInRight'>Driven by the passion for Design, Development & Digital Art,<br /> I blend my logical and creative personas towards building<br />software solutions that are as efficient as a<br />caffeine-fueled coder during a hackathon.</p>
            </div>
          </section>
          <section id='slide-2' className='slideArea'>
            <div className='subSlide slide-2-props slide-left'>
              <p>
                With a keen <br /> eye for <span> aesthetics </span> <br /> added to a <br /> strong <span> technical foundation </span> <br /> I strive to create <br /> visually <span> captivating experiences</span> <br /> that seamlessly merge<br /> <span> form and function</span> 
              </p>
            </div>
            <div className='subSlide slide-2-right slide-right'>
              <ModelViewer scale=".175" modelPath={"./models/dragon_glass.glb"} />
            </div>
          </section>
          <section id='slide-3' className='slideArea'>
            <div className='slide-3-left slide-left'>
              <div className='workExp-item'>
                  Sri Venkateswara College of Engineering
                  <span className='location'>Chennai, India</span>
                </div>
                <div className='workExp-item'>TANSAM(Powered By SIEMENS)</div>
                <div className='workExp-item'>OnePlus India</div>
            </div> 
            <div className='slide-3-props slide-right'>
                <p><span>Education</span> & <br /><span>Work Experience</span></p>
            </div>
          </section>
          <section id='slide-4' className='slideArea'>
            <h1>Dev Page 4</h1>
          </section>
          <section id='slide-5' className='slideArea'>
            <h1>Dev Page 5</h1>
          </section>
          <section id='slide-6' className='slideArea'>
            <h1>Dev Page 6</h1>
          </section>
      </div>
    </div>
  );
};

export default DevContent;