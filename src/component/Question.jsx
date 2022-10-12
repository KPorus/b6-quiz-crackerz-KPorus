import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Q2 from './Q2';

const Question = () => {
    let data = useLoaderData()
    console.log(data.data);
    let {total,questions,name,logo} = data.data
    console.log(questions);
    return (
        <div className='text-center text-2xl font-[Lato] font-medium '>
            <img className='w-[21%] m-auto p-4 drop-shadow-lg' src={logo} alt=""></img>
            <h2 className='border-l-blue-800 p-2 border-2 m-10 font-[Lato] font-semibold text-center'>{name} total question no: {total}</h2>
            {
                questions.map(q => <Q2 questions={q}></Q2>)
            }
        </div>
    );
};

export default Question;