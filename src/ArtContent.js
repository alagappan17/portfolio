import React, { useRef, useEffect, useState } from 'react';

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

  return (
    <div>
      <div className='slideContainer' ref={containerRef} onWheel={handleScroll}>
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
      <div className='timeline tooltip' ref={timelineRef} data-tooltip='Too Lazy to scroll?'>
        <div className='timeline-dots'>
          <div className={`timeline-dot ${currentSlide >= 0 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 1 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 2 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 3 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 4 ? 'active' : ''}`}></div>
          <div className={`timeline-dot ${currentSlide >= 5 ? 'active' : ''}`}></div>
        </div>
        {/* <span class="cursor-text">Too lazy to scroll?</span> */}
      </div>
    </div>
  );
};

export default ArtContent;