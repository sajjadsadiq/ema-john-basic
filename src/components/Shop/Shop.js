import React, { useState } from 'react';
import './Shop.css'
import fakeDate from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // console.log(fakeDate);
    const tenData = fakeDate.slice(0,10);
    const [products, setproducts]  =  useState(tenData);
    const [cart, setcart] = useState([]);

    const handleAddProducts = (product) => {
        console.log('Add Product List', product);
        const newCart =[...cart, product]
        setcart(newCart)
    }
    return (
        <div className = "shop-container">
            <div className="product-container">
                {
                    products.map(productItem => <Product
                        handleAddProducts = {handleAddProducts}
                        product = {productItem}>

                        </Product>)
                }
            </div>
            <div className="order-container">
                <Cart cart = {cart}></Cart>  
            </div>
            
        </div>
    );
};

export default Shop;