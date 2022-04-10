import React, {useState} from 'react';
import './product.css';
import Img from '../../assets/image/mimino.png';

const Product = ({img, link}) => {

    // const [ items , setItems ] = useState([
    //     {
    //         id: 1,
    //         img: './assets/image/mimino.png',
    //         link: 'https://miminoo.herokuapp.com/mimino/index.html',
    //     },
    //     {
    //         id: 2,
    //         img: './assets/image/heroku.png',
    //         link: 'https://miminoo.herokuapp.com/nash/Index.html',
    //     },
    //     {
    //         id: 3,
    //         img: './assets/image/mimino.png',
    //         link: 'https://miminoo.herokuapp.com/mimino/index.html',
    //     }
    // ])

    return (
        <div className='p-block'>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href='https://my-first-portfolio-in-react.vercel.app/' target='_blank' >
                    <img src='https://i.ibb.co/0BLRgy7/screencapture-my-first-portfolio-in-react-vercel-app-2022-04-05-05-22-46.png' alt="" className='p-img'/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href='https://my-first-react-mocha.vercel.app/' target='_blank' >
                    <img src='https://i.ibb.co/M7nkmB7/screencapture-localhost-3000-2022-04-05-06-04-03.png' alt="" className='p-img'/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href='https://helpful-madeleine-83928d.netlify.app/' target='_blank' >
                    <img src='https://i.ibb.co/F5Lc90t/screencapture-file-C-Users-user1-Desktop-project-Index-html-2022-04-05-05-32-17.png' alt="" className='p-img'/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href='https://github.com/Avazxon94' target='_blank' >
                    <img src='https://i.ibb.co/2YmWg9B/screencapture-miminoo-herokuapp-nash-Index-html-2022-04-05-05-27-15.png' alt="" className='p-img'/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href='https://github.com/Avazxon94' target='_blank' >
                    <img src='https://i.ibb.co/hcG0Pnm/screencapture-miminoo-herokuapp-mimino-index-html-2022-04-05-05-26-50.png' alt="" className='p-img'/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href='https://github.com/Avazxon94' target='_blank' >
                    <img src='https://i.ibb.co/SsrCrWf/screencapture-github-Avazxon94-2022-04-10-10-30-01.png' alt="" className='p-img'/>
                </a>
            </div>
        </div>
        
    );
}

export default Product;
