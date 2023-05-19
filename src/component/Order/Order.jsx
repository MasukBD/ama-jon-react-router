/* eslint-disable no-unused-vars */
import React from 'react';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderProductPreview from '../orderProductPreview/OrderProductPreview';

const Order = () => {
    const products = useLoaderData();
    return (
        <>
            <h3 className='order-heading'>Your Order Preview Are Listed Here!</h3>
            <div className='order-details'>
                <div className="ordered-product">
                    {
                        products.map(product => <OrderProductPreview product={product} key={product.id}></OrderProductPreview>)
                    }
                </div>
                <div className="cart-details">
                    <Cart cart={products}></Cart>
                </div>
            </div>
        </>
    );
};

export default Order;