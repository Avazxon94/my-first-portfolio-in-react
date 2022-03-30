import React from 'react';
import './intro.css';
import Me from '../../assets/image/im.png';

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Avazxon Akramov</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Photograph</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Mobile Developer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I'm doing create webpage layouts, writing code, editing website content, and making adjustments based on client feedback.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className='i-img'/>
            </div>
        </div>
    );
}

export default Intro;
