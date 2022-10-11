import React from 'react';


const Q2 = ({questions}) => {
    let {options,question}= questions
    // console.log(options);
    console.log(question);
    return (
        <div>
            {question}
            {options}
        </div>
    );
};

export default Q2;