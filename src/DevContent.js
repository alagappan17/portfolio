import React from 'react';
import DevSlide1 from './DevSlides/DevSlide1';
import DevSlide2 from './DevSlides/DevSlide2';
import DevSlide3 from './DevSlides/DevSlide3';
import DevSlide4 from './DevSlides/DevSlide4';
import DevSlide5 from './DevSlides/DevSlide5';

const DevContent = () => {
  return (
    <div>
      <div className="scrollCon">
        <DevSlide1 />
        <DevSlide2 />
        <DevSlide3 />
        <DevSlide4 />
        <DevSlide5 />
      </div>
    </div>
  );
};

export default DevContent;