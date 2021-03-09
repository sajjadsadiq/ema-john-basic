import React, { useState } from 'react';
import './Shop.css'
import fakeDate from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    // console.log(fakeDate);
    const tenData = fakeDate.slice(0,10);
    const [products, setproducts]  =  useState(tenData);
    const [cart, setcart] = useState([]);

    const handleAddProducts = (product) => {
        console.log('Add Product List', product);
        const newCart =[...cart, product]
        setcart(newCart)
        const sameProduct = newCart.filter(pd =>pd.key ===product.key)
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className = "shop-container">
            <div className="product-container">
                {
                    products.map(productItem => <Product
                        key ={productItem.key}
                        showAddTocart = {true}
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