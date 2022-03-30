import React from 'react';
import Product from '../product/Product';
import './productList.css';
import { products } from '../../data';

const Productlist = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire</h1>
                <p className="pl-desc">
                When I create something new app or website it inspires me. As the Chinese strategist and thinker Sun Tzu said:<br></br>
                <b>Earthworm does not have sharp claws and fangs, it does not have strong muscles and bones, and yet on the surface it feeds on dust, and underground it drinks underground water. This is because he is all - effort! The crab has eight legs and two claws, but it settles in ready-made passages made by snakes and eels - it has no other shelter. This is because the crab is impatient. Therefore, one who does not have deep-seated desires will not be able to have brilliant wisdom; he who does not devote himself entirely to the cause will not have brilliant success.</b>
                </p> 
            </div>
            <div className="pl-list">
            {products.map(item => (
                <Product key={item.id} img={item.img} link={item.link} />
            ))}
            </div>
        </div>
    );
}

export default Productlist;
