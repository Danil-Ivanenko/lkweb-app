import React, { useState } from 'react';

import userIcon from '../icons/User.svg';
import adminIcon from '../icons/Administrator.svg';
import eventsIcon from '../icons/Events.svg';
import servicesIcon from '../icons/Services.svg';
import certificateIcon from '../icons/Сertificate.svg';
import menuIcon from '../icons/menu.svg';
import arrow from '../icons/arrow.svg';
function Sidebar({ isOpen, toggleSidebar }) {
    const [rotation, setRotation] = useState(0);
    const handleArrowClick = () => {
        setRotation((prevRotation) => prevRotation + 180); 
    };
    return (
        <div>

            <img src={menuIcon}  onClick={toggleSidebar} className='smallScreen'/>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
                    <div /> {/* Пустой элемент для создания пространства слева */}
                    <img src={userIcon} alt="User" />
                    <img src={arrow} alt="Arrow"                
                    onClick={() => {
                        handleArrowClick(); 
                        toggleSidebar();  

                    }}
                    style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    
                </div>
                <p className='menu-el'> <img src={userIcon} alt="User" /> <span>Профиль</span></p>
                <p className='menu-el'> <img src={adminIcon} alt="Admin" /> <span>Админ</span></p>
                <p className='menu-el'> <img src={certificateIcon} alt="Certificate" /> <span>Сертификаты</span></p>
                <p className='menu-el'> <img src={servicesIcon} alt="Services" /> <span>Услуги</span></p>
                <p className='menu-el'> <img src={eventsIcon} alt="Events" /> <span>События</span></p>
            </div>
        </div>
    );
}

export default Sidebar;