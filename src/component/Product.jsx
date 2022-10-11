import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ product}) => {
    let {name,logo,total,id} = product

    return (
        <div className='flex flex-row justify-around gap-5'>
            <div className='text-center border sm:flex flex-col gap-4 mt-4 drop-shadow-lg'>
                <img className='w-[50%] m-auto p-4' src={logo}  alt=""></img>
                <div className='my-auto font-bold text-2xl font-[Lato] text-slate-800'>
                    <h1>Subject Name: {name}</h1>
                    <h1>Total Quiz: {total}</h1>
                    <Link to={`/${name}/${id}`}>
                    <button><h1 className='bg-slate-800 text-slate-300 hover:bg-white hover:text-slate-800 ease-in-out p-4 m-4'>
                        
                        Take a test
                        </h1></button>
                        </Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default Product;