import Reactm, {useState} from 'react';
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
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target='_blank' >
                <img src={Img} alt="" className='p-img'/>
            </a>
        </div>
    );
}

export default Product;
