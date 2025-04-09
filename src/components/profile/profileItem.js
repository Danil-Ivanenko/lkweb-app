import React from 'react';

function ProfileItem({ name, text }) {
    if (!text) {
        return null;
    }

    return (
        <div className='inSimpleForm'>
            <p className='gray'> {name} </p>
            <p> {text} </p>
            <hr className="hr" />
        </div>
    );
}

export default ProfileItem;