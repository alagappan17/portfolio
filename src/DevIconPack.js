import React from 'react';
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';


const DevIconPack = () => {
  return (
    <div className="social-icons-container">
      <a href="https://www.linkedin.com/in/alagappan-n-b690a0192/" target="_blank" rel="noopener noreferrer" className='fadeInLeft icon1'>
        <AiOutlineLinkedin size={24} />
        <span className='iconText'>@Alagappan N</span>
      </a>
      <a href="https://twitter.com/alagappantwt" target="_blank" rel="noopener noreferrer" className='fadeInLeft icon2'>
        <AiOutlineTwitter size={24} />
        <span className='iconText'>@alagappantwt</span>
      </a>
      <a href="https://github.com/alagappan17" target="_blank" rel="noopener noreferrer" className='fadeInLeft icon3'>
        <AiOutlineGithub size={24} />
        <span className='iconText'>@alagappan17</span>
      </a>
      <a href="mailto:alagappanforwork@gmail.com" className='fadeInLeft icon4'>
        <AiOutlineMail size={24} />
        <span className='iconText'>alagappanforwork@gmail.com</span>
      </a>
    </div>
  );
};

export default DevIconPack;
