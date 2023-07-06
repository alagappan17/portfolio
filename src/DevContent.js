import React, { useRef, useEffect, useState } from 'react';
import ScrollBar from './ScrollBar';
import ModelViewer from './ModelViewer';

const DevContent = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const timeline = timelineRef.current;

  //   let scrollPercentage = 10;
  //   timeline.style.width = `${scrollPercentage}%`;

  //   const handleScroll = () => {
  //     scrollPercentage = ((container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100)/2 + 10;
  //     timeline.style.width = `${scrollPercentage}%`;

  //     const slides = container.querySelectorAll('section');
  //     let slideIndex = 0;

  //     for (let i = 0; i < slides.length; i++) {
  //       const slide = slides[i];
  //       if (container.scrollLeft >= slide.offsetLeft - slide.offsetWidth / 2) {
  //         slideIndex = i;
  //       }
  //     }

  //     setCurrentSlide(slideIndex);
  //   };

  //   container.addEventListener('scroll', handleScroll);

  //   return () => {
  //     container.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = (event) => {
  //   const container = containerRef.current;
  //   const scrollAmount = event.deltaY;
  //   container.scrollBy({
  //     left: scrollAmount,
  //     behavior: 'smooth',
  //   });
  // };

  // const handleTouchStart = (event) => {
  //   const container = containerRef.current;
  //   container.style.scrollBehavior = 'unset';
  //   container.style.overflowX = 'scroll';

  //   const touch = event.touches[0];
  //   container.dataset.touchStart = touch.clientX;
  //   container.dataset.scrollLeftStart = container.scrollLeft;
  // };

  // const handleTouchMove = (event) => {
  //   const container = containerRef.current;
  //   const touch = event.touches[0];
  //   const touchStart = parseInt(container.dataset.touchStart, 10);
  //   const scrollLeftStart = parseInt(container.dataset.scrollLeftStart, 10);
  //   const touchMoveDelta = touch.clientX - touchStart;

  //   container.scrollLeft = scrollLeftStart - touchMoveDelta;
  // };

  // const handleTouchEnd = () => {
  //   const container = containerRef.current;
  //   container.style.scrollBehavior = 'smooth';
  //   container.style.overflowX = 'auto';

  //   delete container.dataset.touchStart;
  //   delete container.dataset.scrollLeftStart;
  // };

  return (
    <div>
      <div class="scrollCon">
      <section id='slide-1' className='slideArea'>
          <div className='slide-1-props slide-left'>
            <h1 className='rotate nine fadeInRight'>I am&nbsp;
              <span>A</span>
              <span>l</span>
              <span>a</span>
              <span>g</span>
              <span>a</span>
              <span>p</span>
              <span>p</span>
              <span>a</span>
              <span>n</span>
            </h1>
            <p className='fadeInRight description'>An IT graduate, primarily passionate about three things<br /><span id='desDevArt'></span>Design | Development | Digital Art</p>
          </div>
          <div className='slide-1-props slide-right'>
            <img alt='DevLogo' src='./images/SkidMaskFinal.png' style={{width:'250px'}}/>
          </div>
        </section>
        <section id='slide-2' className='slideArea'>
          <div className='slide-2-props slide-left'>
            <p>
              With a keen <br /> eye for <span> aesthetics </span> <br /> added to a <br /> strong <span> technical foundation </span> <br /> I strive to create <br /> visually <span> captivating experiences</span> <br /> that seamlessly <br /> merge form and function
            </p>
          </div>
          <div className='slide-2-right slide-right'>
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
      {/* <div className='slideContainer' ref={containerRef}>
        <section id='slide-1' className='slideArea'>
          <div className='slide-1-props slide-left'>
            <h1 className='rotate nine fadeInRight'>I am&nbsp;
              <span>A</span>
              <span>l</span>
              <span>a</span>
              <span>g</span>
              <span>a</span>
              <span>p</span>
              <span>p</span>
              <span>a</span>
              <span>n</span>
            </h1>
            <p className='fadeInRight description'>An IT graduate, primarily passionate about three things<br /><span id='desDevArt'></span>Design | Development | Digital Art</p>
          </div>
          <div className='slide-1-props slide-right'>
            <img alt='DevLogo' src='./images/SkidMaskFinal.png' style={{width:'250px'}}/>
          </div>
        </section>

        <section id='slide-2' className='slideArea'>
          <div className='slide-2-props slide-left'>
            <p>
              With a keen <br /> eye for <span> aesthetics </span> <br /> added to a <br /> strong <span> technical foundation </span> <br /> I strive to create <br /> visually <span> captivating experiences</span> <br /> that seamlessly <br /> merge form and function
            </p>
          </div>
          <div className='slide-2-right slide-right'>
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
      <ScrollBar timelineRef = {timelineRef} currentSlide = {currentSlide}/> */}
    </div>
  );
};

export default DevContent;