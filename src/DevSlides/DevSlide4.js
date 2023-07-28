import React from 'react'
import ModelViewer from '../ModelViewer'

const DevSlide4 = () => {
    const projectOneLink = 'https://loving-shelf-1a7.notion.site/Best-Crop-Prediction-Based-On-Yield-Using-Hybrid-Deep-Learning-Models-and-IoT-77ae864f55c1478c81adcfced7435485'
    const projectTwoLink = 'https://loving-shelf-1a7.notion.site/CoinSpot-Real-Time-Crypto-Statistics-b4b9db1aeb3444e6af23fbec4a645410'
    const projectThreeLink = 'https://loving-shelf-1a7.notion.site/Portfolio-Website-827f3365371546929b9565a2ecbb13b6'
    const projectFourLink = 'https://loving-shelf-1a7.notion.site/Meme-Generator-67b50196ab1b493c86a1654b8ab86c24'
    const projectFiveLink = 'https://loving-shelf-1a7.notion.site/Tsuki-Clone-35efba1692e343e9b88533842dfa7009'
    const projectSixLink = 'https://loving-shelf-1a7.notion.site/Interactive-e-Commerce-Truck-in-VR-51b605030b2d4dec946b0fd89b6192f7'
    const projectSevenLink = 'https://loving-shelf-1a7.notion.site/Other-Projects-f2f85ee60e9e4d079ad486e24ebe04f8'
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
                <a href={projectSixLink} target="_blank" rel="noopener noreferrer">
                <div className='projectItem smallItem'>
                    <h2>Interactive Commerce Truck in VR</h2>
                    {/* <p>Unity, Blender, C#</p> */}
                </div>
                </a>
                <a href={projectFiveLink} target="_blank" rel="noopener noreferrer">
                <div className='projectItem smallItem'>
                    <h2>Tsuki Clone</h2>
                    {/* <h2>Terminal Based Chess Game</h2> */}
                    {/* <p>Programming(C)</p> */}
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