import React from 'react';
import Ans from './Ans';


const Q2 = ({questions}) => {
    let {options,question}= questions
    // console.log(options);
    console.log(question);
    return (
        <div className='flex justify-center'>
            <div className='bg-slate-800 mx-4 w-[50%] p-4 m-4 text-slate-200'>
                {question}
                {options.map(option => <Ans options={option}></Ans>)}
            </div>
        </div>
    );
};

export default Q2;