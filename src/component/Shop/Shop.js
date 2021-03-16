import React from 'react';
import fakeData from '../../fakeData/index';
import  { useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';




const Shop = () => {
    const first10= fakeData.slice(0,10);
    const[products, setProducts]=useState(first10);
    const [cart , setCart ] = useState([]);
    const handleAddProduct = (product)=>{
        console.log("addProduct",product);
        const newCart = [...cart,product]
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                
                    {
                        products.map(pd => <Products
                        handleAddProduct={handleAddProduct}
                            product={pd} >

                        
                            </Products>)
                    }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;