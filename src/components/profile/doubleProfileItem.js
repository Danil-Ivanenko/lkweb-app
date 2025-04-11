import React from 'react';

function DoubleProfileItem({ name1, text1, name2, text2 }) {
    if (!text1 && !text2) {
        return null;
    }

    return (
        <div className='inSimpleForm'>
            <div style={{display: "grid" , gridTemplateColumns: "50% 50% "}}>
                <div className='inSimpleForm'> 
                    <p className='gray'> {name1} </p>
                    <p> {text1} </p>
                </div>
                <div className='inSimpleForm'> 
                    <p className='gray'> {name2} </p>
                    <p> {text2} </p>
                </div>

            </div>
            <hr className="hr" />
        </div>
    );
}

export default DoubleProfileItem;