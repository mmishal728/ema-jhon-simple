import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Products = (props) => {
    const {img,name,seller,price,stock}= props.product
    // console.log(props);

    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4  className="product-name">{name}</h4>
                <br/>
                <p><small> by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left -Order soon</small></p>
                <button className="main-btn"
                onClick={()=>props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Products;