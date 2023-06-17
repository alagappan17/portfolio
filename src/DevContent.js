import React from 'react'
import ScrollContainer from 'react-scroll-horizontal';

const DevContent = () => {
  return (
    <div className='slideContainer'>
        <ScrollContainer className="scroll-container" hideScrollbars={false} vertical={false}>
            <div className='slide'>DevContent 1</div>
            <div className='slide'>DevContent 2</div>
        </ScrollContainer>
        
    </div>
  )
}

export default DevContent