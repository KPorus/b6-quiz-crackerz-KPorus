import React from 'react';
import Ans from './Ans';
import { useState } from 'react';
import { AiFillEye} from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Q2 = ({questions}) => {
    let {options,question,correctAnswer}= questions
    // console.log(options);
    // console.log(question);
    const [state, setstate] = useState(true);
    let click =(state)=>
    {
        if(state === true)
        {
            toast(`Correct answer:${correctAnswer}`, { autoClose: 5000 })
        }
    }
    return (
        <div className='flex justify-center'>
            <div className='bg-slate-800 mx-4 w-[50%] p-4 m-4 text-slate-200'>
                <div className='flex items-center justify-around'>
                    <div>{question}</div>
                    <div onClick={()=>click(state)}><AiFillEye>
                        {/* {
                            state === true &&
                            alert(`${correctAnswer}`)
                        } */}
                        </AiFillEye></div>
                </div>
                {options.map(option => <Ans options={option} ans = {correctAnswer}></Ans>)}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Q2;