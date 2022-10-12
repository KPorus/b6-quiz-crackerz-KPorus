import React from 'react';
import Swal from 'sweetalert2'
import { useState } from 'react';
const Ans = ({options,ans}) => {
   console.log(options);
    const [state, setstate] = useState(true);
    let ansClick = (state)=>
    {
        
        if(state)
        {
            if(options === ans)
            {
                Swal.fire({
                    title: 'Success!',
                    text: 'Nicely Done',
                    icon: 'success',
                  })
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'try Again'
                  })
            }
        }
    }
    return (
        <div  onClick={()=>ansClick(state)} className={`border border-teal-700 m-2 drop-shadow-xl `}>
           <button >
           <ul className='text-xl p-2'> 
                <span id="answ">{options}</span>
            </ul>
           </button>
        </div>
    );
};

export default Ans;