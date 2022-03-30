import React from 'react';
import './about.css';
import Awards from '../../assets/image/awards.png';
import Card from '../../assets/image/card.png';

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Card} alt="" className='a-img'/>
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About me</h1>
                <div className="a-sub">
                Skills: HTML5 , CSS3 , Javascript and React JS
                </div>
                <div className="a-text">
                I am a Front-End developer from Uzbekistan. I am seriously into animation and creating intuitive dynamic user interfaces. Well organized problem solver, independent worker with great attention to detail. Fan of MMA, outdoor activities, swimming and books. So far a bachelor, but I hope not for life. He is interested in the whole range of front-end and works on ambitious projects with positive people.
                </div>
            </div>
        </div>
    );
}

export default About;
