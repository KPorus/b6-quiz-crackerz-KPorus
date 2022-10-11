import React, { useContext } from 'react';
import {ProductContext } from '../layout/Main'
import Product from './Product';
const Home = () => {
    const context = useContext(ProductContext);
    return (
        <div>
            {context.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
        </div>
    );
};

export default Home;