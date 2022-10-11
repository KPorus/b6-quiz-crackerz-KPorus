import React from 'react';

const Ans = ({options}) => {
    console.log(options);
    return (
        <div className='border border-teal-700 m-2'>
            <ul className='text-xl p-2'>
                <li><input className='mr-3' type="radio" id="re" value={options}/>
                <label for="re">{options}</label></li>
            </ul>
        </div>
    );
};

export default Ans;