import React, { useRef, useEffect, useState } from 'react';
import ScrollBar from './ScrollBar';

const ArtContent = () => {
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
    //   timeline.style.width = `${scrollPercentage}%`;
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
    container.style.scrollBehavior = 'smooth';
    // container.style.overflowX = 'scroll';

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
    console.log(touchMoveDelta)

    container.scrollLeft = scrollLeftStart - touchMoveDelta;
  };

  const handleTouchEnd = () => {
    const container = containerRef.current;
    container.style.scrollBehavior = 'smooth';
    // container.style.overflowX = 'auto';

    delete container.dataset.touchStart;
    delete container.dataset.scrollLeftStart;
  };

  return (
    <div>
      <div className='slideContainer' ref={containerRef} onWheel={handleScroll} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <section id='slide-1'>
          <h1>Art Page 1</h1>
        </section>
        <section id='slide-2'>
          <h1>Art Page 2</h1>
        </section>
        <section id='slide-3'>
          <h1>Art Page 3</h1>
        </section>
        <section id='slide-4'>
          <h1>Art Page 4</h1>
        </section>
        <section id='slide-5'>
          <h1>Art Page 5</h1>
        </section>
        <section id='slide-6'>
          <h1>Art Page 6</h1>
        </section>
      </div>
      <ScrollBar timelineRef = {timelineRef} currentSlide = {currentSlide}/>
    </div>
  );
};

export default ArtContent;