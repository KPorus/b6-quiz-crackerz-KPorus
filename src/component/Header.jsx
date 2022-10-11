import React from 'react';
import { useState } from "react";
import { IoIosMenu,IoMdClose} from "react-icons/io";
import { Link } from 'react-router-dom';
const Header = () => {
    const [state, setstate] = useState(false);
    let navBtn = (state)=>{
        setstate(!state);
       }
    return (
        <div className='p-4 bg-slate-800'>
        <div className='md:w-11/12 mx-auto flex items-center justify-between '>
            <h1 className='font-[Lato] text-2xl font-bold text-red-600'>Quizizz</h1>
         <div className={`text-slate-300 sm:block sm:static  absolute ${state ? 'top-16 mb-10 bg-slate-900 flex flex-col z-10 text-center p-4' : 'top-[-100%]'}`}>
         <Link className='pr-7 hover:text-orange-700 ease-in-out duration-300 text-xl font-medium' to='/'>Home</Link>
         <Link className='pr-7 hover:text-orange-700  ease-in-out duration-300 text-xl font-medium' to='/Chart'>Chart</Link>
         </div>      

        <div className='text-2xl text-slate-300 sm:hidden' onClick={()=>navBtn(state)} >
         {state === false && (<IoIosMenu/>)}
            {state === true && (<IoMdClose/>)}
            </div>   
     </div>
    </div>
    );
};

export default Header;