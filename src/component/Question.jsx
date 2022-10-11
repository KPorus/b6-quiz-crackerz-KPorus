import React, { useContext } from 'react';
import {ProductContext } from '../layout/Main'
const Question = () => {
    const context = useContext(ProductContext);
    console.log(context)
    return (
        <div>
            <h1>This is react</h1>
        </div>
    );
};

export default Question;