import React from 'react';
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';


const DevIconPack = () => {
  return (
    <div className="social-icons-container">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin size={24} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineTwitter size={24} />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineGithub size={24} />
      </a>
      <a href="mailto:example@gmail.com">
        <AiOutlineMail size={24} />
      </a>
    </div>
  );
};

export default DevIconPack;
