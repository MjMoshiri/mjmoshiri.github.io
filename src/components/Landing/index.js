import React from 'react';
import './index.css';
function Landing() {
    return (
        <div className="landing-container">
            <img className="landing-image" src="/me.jpg" alt="MJ"/>
            <div className="landing-text-container">
                <h1>Hello, I'm <span>MJ</span></h1>
                <p>
                    An all-around Software Engineer with a passion for <span className="animated-text">problem solving</span> and learning new technologies.
                </p>
            </div>
        </div>
    );
}


export default Landing;
