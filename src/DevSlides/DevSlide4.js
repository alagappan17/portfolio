import React from 'react'
import ModelViewer from '../ModelViewer'

const DevSlide4 = () => {
    const projectOneLink = 'https://docs.google.com/presentation/d/1TsJjEURSWLCGGNAypgQBUdCD4eut3KCsZD2Kc13ONrk/edit#slide=id.g25b56f934b8_0_10'
    const projectTwoLink = 'https://docs.google.com/presentation/d/1TsJjEURSWLCGGNAypgQBUdCD4eut3KCsZD2Kc13ONrk/edit#slide=id.g25b56f934b8_0_15'
    const projectThreeLink = 'https://docs.google.com/presentation/d/1TsJjEURSWLCGGNAypgQBUdCD4eut3KCsZD2Kc13ONrk/edit#slide=id.g25b53f9a3a4_1_0'
    const projectFourLink = 'https://docs.google.com/presentation/d/1TsJjEURSWLCGGNAypgQBUdCD4eut3KCsZD2Kc13ONrk/edit#slide=id.g25b53f9a3a4_1_10'
    const projectFiveLink = 'https://docs.google.com/presentation/d/1TsJjEURSWLCGGNAypgQBUdCD4eut3KCsZD2Kc13ONrk/edit#slide=id.g25b53f9a3a4_1_5'
    const projectSixLink = 'https://docs.google.com/presentation/d/1TsJjEURSWLCGGNAypgQBUdCD4eut3KCsZD2Kc13ONrk/edit#slide=id.g25b53f9a3a4_1_15'
    const projectSevenLink = 'https://docs.google.com/presentation/d/1TsJjEURSWLCGGNAypgQBUdCD4eut3KCsZD2Kc13ONrk/edit#slide=id.g25b53f9a3a4_1_20'
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
                <a href={projectOneLink} target="_blank" rel="noopener noreferrer">
                <div className='projectItem bigItem'>
                    <h2>Best Crop Prediction Based On Yield Using Hybrid Deep Learning Models and IoT</h2>
                    <p>Developed a web app along with analyzing various hybrid deep learning models focused on predicting the best crop that can be grown in an area while considering multiple factors fetched using an IoT system and Open Source APIs</p>
                </div>
                </a>
                <a href={projectTwoLink} target="_blank" rel="noopener noreferrer">
                <div className='projectItem bigItem'>
                    <h2>CoinSpot - Real Time Crypto Statistics</h2>
                    <p>Built a React application that delivers up-to-date crypto statistics and individual coin analysis with real-time data fetched from CoinGeck API</p>
                    <a href='https://coin-spot.netlify.app/' target="_blank" rel="noopener noreferrer"><p>Live Website</p></a>
                </div>
                </a>
            </div>
            <div className='projectContainer smallContainer'>
                <a href={projectThreeLink} target="_blank" rel="noopener noreferrer">
                <div className='projectItem smallItem'>
                    <h2>Portfolio Website</h2>
                    {/* <p>React.js</p> */}
                </div>
                </a>
                <a href={projectFourLink} target="_blank" rel="noopener noreferrer">
                <div className='projectItem smallItem'>
                    <h2>Meme Generator</h2>
                    {/* <p>React.js</p> */}
                </div>
                </a>
                <a href={projectFiveLink} target="_blank" rel="noopener noreferrer">
                <div className='projectItem smallItem'>
                    <h2>Tsuki Clone</h2>
                    {/* <h2>Terminal Based Chess Game</h2> */}
                    {/* <p>Programming(C)</p> */}
                </div>
                </a>
                <a href={projectSixLink} target="_blank" rel="noopener noreferrer">
                <div className='projectItem smallItem'>
                    <h2>Interactive Commerce Truck in VR</h2>
                    {/* <p>Unity, Blender, C#</p> */}
                </div>
                </a>
                <a href={projectSevenLink} target="_blank" rel="noopener noreferrer">
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