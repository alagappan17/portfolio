import React from 'react'
import ModelViewer from '../ModelViewer'

const DevSlide4 = () => {
  return (
    <section id='slide-4' className='slideArea'>
        <div className='subSlide slide-4-props slide-left'>
            {/* <div class="box">
                <span></span>
                <div class="content">
                    <h2>Hover me!</h2>
                </div>
            </div> */}
            <ModelViewer scale=".4" modelPath={"./models/console.glb"} />
        </div>
        <div className='subSlide slide-right slide-4-props'>
            <h1>Projects</h1>
            <div className='projectContainer'>
                <a href=''>
                <div className='projectItem bigItem'>
                    <h2>Best Crop Prediction Based On Yield Using Hybrid Deep Learning Models and IoT</h2>
                    <p>Developed a web app along with analyzing various hybrid deep learning models focused on predicting the best crop that can be grown in an area while considering multiple factors fetched using an IoT system and Open Source APIs</p>
                </div>
                </a>
                <div className='projectItem bigItem'>
                    <h2>CoinSpot - Real Time Crypto Statistics</h2>
                    <p>Built a React application that delivers up-to-date crypto statistics and individual coin analysis with real-time data fetched from CoinGeck API</p>
                    <a href='https://coin-spot.netlify.app/'><p>Live Website</p></a>
                </div>
            </div>
            <div className='projectContainer smallContainer'>
                <a href=''>
                <div className='projectItem smallItem'>
                    <h2>Portfolio Website</h2>
                    {/* <p>React.js</p> */}
                </div>
                </a>
                <a href=''>
                <div className='projectItem smallItem'>
                    <h2>Meme Generator</h2>
                    {/* <p>React.js</p> */}
                </div>
                </a>
                <a href=''>
                <div className='projectItem smallItem'>
                    <h2>Tsuki Clone</h2>
                    {/* <h2>Terminal Based Chess Game</h2> */}
                    {/* <p>Programming(C)</p> */}
                </div>
                </a>
                <a href=''>
                <div className='projectItem smallItem'>
                    <h2>Interactive Commerce Truck in VR</h2>
                    {/* <p>Unity, Blender, C#</p> */}
                </div>
                </a>
                <a href=''>
                <div className='projectItem smallItem'>
                    <h2>Other Projects</h2>
                    {/* <p>HTML, CSS, JS, React.js</p> */}
                </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default DevSlide4;