import React, { useContext } from 'react';
import {ProductContext } from '../layout/Main'
import Product from './Product';
const Home = () => {
    const context = useContext(ProductContext);
    
    return (
        <div>
          <h1 className='text-5xl p-3 font-[Lato] font-bold text-slate-700 text-center'>Welcome to Quizizz</h1>
          <p className='text-2xl p-2 font-[Lato] font-medium text-slate-600 text-center'>Test yourself. We have create those quizz for the student , programmer and developer. Enrich your self.</p>
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