import React from 'react'

const ScrollBar = (props) => {
    const {timelineRef, currentSlide } = props
  return (
    <div>
        <div className='timeline tooltip' ref={timelineRef} data-tooltip='Too Lazy to scroll?'>
            <div className='timeline-dots'>
                <div className={`timeline-dot ${currentSlide >= 0 ? 'active' : ''}`}></div>
                <div className={`timeline-dot ${currentSlide >= 1 ? 'active' : ''}`}></div>
                <div className={`timeline-dot ${currentSlide >= 2 ? 'active' : ''}`}></div>
                <div className={`timeline-dot ${currentSlide >= 3 ? 'active' : ''}`}></div>
                <div className={`timeline-dot ${currentSlide >= 4 ? 'active' : ''}`}></div>
                <div className={`timeline-dot ${currentSlide >= 5 ? 'active' : ''}`}></div>
            </div>
        </div>
    </div>
  )
}

export default ScrollBar