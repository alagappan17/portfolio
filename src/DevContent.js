import React, { useRef, useEffect, useState } from 'react';
import ScrollBar from './ScrollBar';
import ModelViewer from './ModelViewer';

const DevContent = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;

    let scrollPercentage = 10;
    timeline.style.width = `${scrollPercentage}%`;

    const handleScroll = () => {
      scrollPercentage = ((container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100)/2 + 10;
      timeline.style.width = `${scrollPercentage}%`;

      const slides = container.querySelectorAll('section');
      let slideIndex = 0;

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        if (container.scrollLeft >= slide.offsetLeft - slide.offsetWidth / 2) {
          slideIndex = i;
        }
      }

      setCurrentSlide(slideIndex);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (event) => {
    const container = containerRef.current;
    const scrollAmount = event.deltaY;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleTouchStart = (event) => {
    const container = containerRef.current;
    container.style.scrollBehavior = 'unset';
    container.style.overflowX = 'scroll';

    const touch = event.touches[0];
    container.dataset.touchStart = touch.clientX;
    container.dataset.scrollLeftStart = container.scrollLeft;
  };

  const handleTouchMove = (event) => {
    const container = containerRef.current;
    const touch = event.touches[0];
    const touchStart = parseInt(container.dataset.touchStart, 10);
    const scrollLeftStart = parseInt(container.dataset.scrollLeftStart, 10);
    const touchMoveDelta = touch.clientX - touchStart;

    container.scrollLeft = scrollLeftStart - touchMoveDelta;
  };

  const handleTouchEnd = () => {
    const container = containerRef.current;
    container.style.scrollBehavior = 'smooth';
    container.style.overflowX = 'auto';

    delete container.dataset.touchStart;
    delete container.dataset.scrollLeftStart;
  };

  return (
    <div>
      <div className='slideContainer' ref={containerRef} onWheel={handleScroll} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <section id='slide-1'>
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

        <section id='slide-2'>
          <div className='slide-2-props slide-left'>
            <p>
              With a keen <br /> eye for <span> aesthetics </span> <br /> added to a <br /> strong <span> technical foundation </span> <br /> I strive to create <br /> visually <span> captivating experiences</span> <br /> that seamlessly <br /> merge form and function
            </p>
          </div>
          <div className='slide-2-right slide-right'>
            <ModelViewer scale=".005" modelPath={"./models/dragon_glass.glb"} />
          </div>
        </section>
        <section id='slide-3'>
          <h1>Dev Page 3</h1>
        </section>
        <section id='slide-4'>
          <h1>Dev Page 4</h1>
        </section>
        <section id='slide-5'>
          <h1>Dev Page 5</h1>
        </section>
        <section id='slide-6'>
          <h1>Dev Page 6</h1>
        </section>
      </div>
      <ScrollBar timelineRef = {timelineRef} currentSlide = {currentSlide}/>
      {/* <div className='timeline tooltip' ref={timelineRef} data-tooltip='Too Lazy to scroll?'>
        <div className='timeline-dots'>
          <div className={`timeline-dot ${currentSlide >= 0 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 1 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 2 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 3 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 4 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 5 ? 'active' : ''}`}></div>
        </div>
      </div> */}
    </div>
  );
};

export default DevContent;