import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
{/* <i class="fas fa-shopping-cart"></i> */}

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="Product">
            <div>
            <img src={img} alt=""/>
            </div>
            <div className = "product-name">
                <h3 >{name}</h3>
                <br/>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                <button 
                    className = "btn-cart"
                    onClick = {() => props.handleAddProducts(props.product)}>
                      <FontAwesomeIcon icon={faShoppingCart} /> 
                      Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;