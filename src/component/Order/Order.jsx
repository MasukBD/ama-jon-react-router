/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderProductPreview from '../orderProductPreview/OrderProductPreview';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const products = useLoaderData();

    const [cart, setCart] = useState(products);

    // clear single item from cart function 
    const handleCartFromOrder = (id) => {
        const remainingOrder = cart.filter(p => p.id !== id);
        removeFromDb(id);
        setCart(remainingOrder);
    }

    // clear full cart that all cart item function 
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <>
            <h3 className='order-heading'>Your Order Preview Are Listed Here!</h3>
            <div className='order-details'>
                <div className="ordered-product">
                    {
                        cart.map(product => <OrderProductPreview handleCart={handleCartFromOrder} product={product} key={product.id}></OrderProductPreview>)
                    }
                </div>
                <div className="cart-details">
                    <Cart handleClearCart={handleClearCart} cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Order;