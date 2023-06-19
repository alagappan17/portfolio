import React from 'react';
import { AiOutlineInstagram, AiOutlineBehance, AiOutlineYoutube, AiOutlineMail } from 'react-icons/ai';


const ArtIconPack = () => {
  return (
    <div className="social-icons-container">
      <a href="https://www.instagram.com/skidrrow/" target="_blank" rel="noopener noreferrer" className='fadeInLeft icon1'>
        <AiOutlineInstagram size={24} />
        <span className='iconText'>@skidrrow</span>
      </a>
      <a href="https://www.behance.net/alagappann" target="_blank" rel="noopener noreferrer" className='fadeInLeft icon2'>
        <AiOutlineBehance size={24} />
        <span className='iconText'>@alagappann</span>
      </a>
      <a href="https://www.youtube.com/@skidrrow8073" target="_blank" rel="noopener noreferrer" className='fadeInLeft icon3'>
        <AiOutlineYoutube size={24} />
        <span className='iconText'>@skidrrow</span>
      </a>
      <a href="mailto:skidrrowforwork@gmail.com" className='fadeInLeft icon4'>
        <AiOutlineMail size={24} />
        <span className='iconText'>skidrrowforwork@gmail.com</span>
      </a>
    </div>
  );
};

export default ArtIconPack;
