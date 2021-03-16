import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    // const total = cart.reduce((total,prd)=>
    // total+prd.price ,0)
    let total  = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total= total +product.price;
    }
    let shipment=0;
    if (total >35){
        shipment = 0;
    }
    else if(total >15) {
        shipment = 4.99;
    }
    else if (total > 0){
        shipment =12.99
    }
    let tax = total /6;

    const formatNumber =num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered:{cart.length}</p>
            <p>Product price:{formatNumber(total)}</p>
            <p><small>Shipment Cost:{formatNumber(shipment)}</small></p>
            <p>Tax:{formatNumber(tax)}</p>
            <p>Total Price:{formatNumber(total + shipment + tax)}</p>
            
            
        </div>
    );
};

export default Cart;