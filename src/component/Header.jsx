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
        <div >
        <div className='md:w-11/12 mx-auto flex items-center justify-between '>
            <h1 className='font-[Lato] text-2xl font-bold'>Quizzz</h1>
         <div className={`text-slate-900 sm:block sm:static  absolute ${state ? 'top-16 mb-10 bg-slate-900 flex flex-col z-10 text-center pl-2' : 'top-[-100%]'}`}>
         <Link className='pr-7 hover:text-orange-700 ease-in-out duration-300' to='/'>Home</Link>
         <Link className='pr-7 hover:text-orange-700  ease-in-out duration-300' to='/Chart'>Chart</Link>
         </div>      

        <div className='text-2xl text-slate-900 sm:hidden' onClick={()=>navBtn(state)} >
         {state === false && (<IoIosMenu/>)}
            {state === true && (<IoMdClose/>)}
            </div>   
     </div>
    </div>
    );
};

export default Header;