import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {key}=useParams()
    const product = fakeData.find(pd =>pd.key === key)
    console.log(product);
    return (
        <div>
            <h3>{key} Coming Soon!!!!!!</h3>
            <Product showAddTocart= {false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;