import React from 'react';
import './index.css';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {SiLeetcode} from 'react-icons/si';

function Landing() {
    return (<div className="landing-container">
        <img className="landing-image" src="/me.jpg" alt="MJ"/>
        <div className="icons-container">
            <a href="https://www.linkedin.com/in/mjmoshiri/" target="_blank" rel="noreferrer">
                <FaLinkedin size={24}/>
            </a>
            <a href="https://leetcode.com/mjmtg/" target="_blank" rel="noreferrer">
                <SiLeetcode size={24}/>
            </a>
            <a href="https://github.com/mjmoshiri" target="_blank" rel="noreferrer">
                <FaGithub size={24}/>
            </a>
            <a href="mailto:thisismjmoshiri@gmail.com" target="_blank" rel="noreferrer">
                <MdOutlineAlternateEmail size={24}/>
            </a>
        </div>
        <div className="landing-text-container">
            <h1><span className="large-screen-text">(づ ◕‿◕ )づ<br/></span>
                Hello, I'm <span style={{color: "#0077cc"}}>MJ</span></h1>
            <p>
                An all-around Software Engineer with a passion for <span
                className="animated-text">problem solving</span> and learning new technologies.
            </p>
        </div>
    </div>);
}


export default Landing;
