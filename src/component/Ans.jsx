import React from 'react';

const Ans = ({options,ans}) => {
    console.log(ans);
    let a = document.getElementById('re')
    console.log(a)
    return (
        <div className='border border-teal-700 m-2'>
            <ul className='text-xl p-2'>
                <li><input className='mr-3' type="radio" id="re"  name="radAnswer" value={options}/>
                <label for="re">{options}</label></li>
            </ul>
        </div>
    );
};

export default Ans;