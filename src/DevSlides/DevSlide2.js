import React from 'react'
import ModelViewer from '../ModelViewer'

const DevSlide2 = () => {
  return (
    <section id='slide-2' className='slideArea'>
        <div className='subSlide slide-2-props slide-left'>
            <p>
                With a keen <br /> eye for <span> aesthetics </span> <br /> added to a <br /> strong <span> technical foundation </span> <br /> I strive to create <br /> visually <span> captivating experiences</span> <br /> that seamlessly merge<br /> <span> form and function</span> 
            </p>
        </div>
            <div className='subSlide slide-2-right slide-right'>
            <ModelViewer scale=".5" modelPath={"./models/Island.glb"} />
        </div>
    </section>
  )
}

export default DevSlide2;