import React from 'react'
import './Styles.css';
import { useContext } from 'react';
import { ProfileContext } from './ProfileContext';

const NavButtons = () => {
    const { activeProfile, setActiveProfile } = useContext(ProfileContext)
  return (
    <div>
        <div class="navButton-container">
            <div class={`navButton-item devButton ${activeProfile === "Developer" ? "blackButton" : "whiteButton"}`} onClick={() => {setActiveProfile("Developer")}}>
                <span>Developer</span>
            </div>
            <div class={`navButton-item artButton ${activeProfile === "Artist" ? "blackButton" : "whiteButton"}`} onClick={() => {setActiveProfile("Artist")}}>
                <span>Digital Artist</span>
            </div>
        </div>
    </div>
  )
}

export default NavButtons