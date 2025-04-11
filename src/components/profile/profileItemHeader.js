import React from 'react';

function ProfileItemHeader({ name1, name2,onClick  }) {

    return (
        <div className='inSimpleForm'>
            <div style={{display: "grid" , gridTemplateColumns: "50% 50% "}}>
                <div className='inSimpleForm'> 
                    <p style={{fontSize: "1.2rem", marginBottom: "15px"}} > {name1} </p>
                </div>
                <div className='inSimpleForm'> 
                    <div style={{display: "flex" , justifyContent: "space-between"}}>
                        <p style={{fontSize: "1.2rem", marginBottom: "15px"}}> {name2} </p>
                        <button onClick={onClick }> ^ </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProfileItemHeader;