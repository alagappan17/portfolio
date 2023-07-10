import React from 'react'
import { useState } from 'react'

const DevSlide3 = () => {
    const [exp ,setExp] = useState('SVCE')
  return (
    <section id='slide-3' className='slideArea'>
        <div className='slide-3-props'>
            <h1>Education & Work Experience</h1>
        </div>
        <div className='workExp'>
            <div className='workList'>
                <div className={`workItem ${exp === "SVCE" ? "activeItem" : "notActiveItem"}`} onClick={() => setExp('SVCE')}>
                    <h1>Sri Venkateswara College of Engineering</h1>
                    <p className='firstP'>B.Tech Information Technology</p>
                    <p>Aug, 2019 - Jun, 2023</p>
                    <p>Chennai, India</p>
                </div>
                <div className={`workItem ${exp === "TANSAM" ? "activeItem" : "notActiveItem"}`} onClick={() => setExp('TANSAM')}>
                    <h1>TANSAM (Powered By SIEMENS)</h1>
                    {/* <h1>Tamil Nadu Smart and Advanced Manufacturing Center (Powered By SIEMENS)</h1> */}
                    <p className='firstP'>Virtual Reality Development Intern</p>
                    <p>Feb, 2023 - Mar, 2023</p>
                    <p>Chennai, India</p>
                </div>
                <div className={`workItem ${exp === "OP" ? "activeItem" : "notActiveItem"}`} onClick={() => setExp('OP')}>
                    <h1>OnePlus India</h1>
                    <p className='firstP'>Student Ambassador (Marketing Intern)</p>
                    <p>Oct, 2021 - Jun, 2022</p>
                    <p>Remote, India</p>
                </div>
            </div>
            <hr className='lineDivide'/>
            <div className='workDesc fadeInRight' key={Math.random()}>
                { exp == "SVCE" ? (
                <div>
                    <div>
                        <h1>Sri Venkateswara College of Engineering</h1>
                        <p className='firstP'>B.Tech Information Technology</p>
                        <p>Aug, 2019 - Jun, 2023</p>
                        <p>Chennai, India</p>
                    </div>
                    <div className='workDescList'>
                        <ul>
                            <li>Characterized as a blend of theoretical knowledge, practical experience, and extracurricular engagement, this degree provided a solid foundation in technical skills and problem-solving abilities</li>
                            <li>Participated in multiple hackathons and worked on multiple academic projects along the course, spread throughout multiple domains from Full-Stack Development to Deep Learning</li>
                        </ul>
                    </div>
                    <div className='skillContainer'>
                        <div className='skillBox'>C/C++</div>
                        <div className='skillBox'>Python</div>
                        <div className='skillBox'>HTML</div>
                        <div className='skillBox'>CSS</div>
                        <div className='skillBox'>JavaScript</div>
                        <div className='skillBox'>React.js</div>
                        <div className='skillBox'>PHP</div>
                        <div className='skillBox'>MySQL</div>
                        <div className='skillBox'>Web Development</div>
                        <div className='skillBox'>Programming</div>
                        <div className='skillBox'>Data Structures</div>
                        <div className='skillBox'>Deep Learning</div>
                    </div>
                </div>
                ) : exp == "TANSAM" ? (
                <div>
                    <div>
                        <h1>Tamil Nadu Smart and Advanced Manufacturing Center (Powered By SIEMENS)</h1>
                        <p className='firstP'>Virtual Reality Development Intern</p>
                        <p>Feb, 2023 - Mar, 2023</p>
                        <p>Chennai, India</p>
                    </div>
                    <div className='workDescList'>
                        <ul>
                            <li>Built interactive and immersive virtual environments using Unity and Unreal Engine 5</li>
                            <li>Developed VR solutions to visualize and solve identified industrial problems</li>
                        </ul>
                    </div>
                    <div className='skillContainer'>
                        <div className='skillBox'>Virtual Reality</div>
                        <div className='skillBox'>XR Development</div>
                        <div className='skillBox'>VR Hardware</div>
                        <div className='skillBox'>Unity</div>
                        <div className='skillBox'>Unreal Engine</div>
                        <div className='skillBox'>Blender</div>
                        <div className='skillBox'>C#</div>
                    </div>
                </div>
                ) : (
                <div>
                    <div>
                        <h1>OnePlus India</h1>
                        <p className='firstP'>Student Ambassador (Marketing Intern)</p>
                        <p>Oct, 2021 - Jun, 2022</p>
                        <p>Remote, India</p>
                    </div>
                    <div className='workDescList'>
                        <ul>
                            <li>Was a part of a 25-member cohort, committed to building a strong student community for OnePlus</li>
                            <li>Reached 425k+ organic social media audience through campaigns and content</li>
                            <li>Collaborated with multiple college students across India</li>
                        </ul>
                    </div>
                    <div className='skillContainer'>
                        <div className='skillBox'>Digital Marketing</div>
                        <div className='skillBox'>Community Marketing</div>
                        <div className='skillBox'>Project Management</div>
                        <div className='skillBox'>Collaboration</div>
                        <div className='skillBox'>Content Creation</div>
                        <div className='skillBox'>3D Animation</div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default DevSlide3