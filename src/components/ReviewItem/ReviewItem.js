import React from 'react';
import './ReviewItem.css'
// import { Button } from 'react-bootstrap';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity} = props.product;
    return (
        <div className='review-item'>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            {/* <Button variant="warning">Remove</Button> */}
            <button className='btn btn-warning'>Remove</button>
            <hr/>
        </div>
    );
};

export default ReviewItem;