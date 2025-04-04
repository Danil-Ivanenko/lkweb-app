import React, { useState } from 'react';
import LanguageDropdown from '../components/LanguageDropdown'
import Sidebar from '../components/Sidebar';
import  '../csses/sidebar.css'

function ProfilePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (

<div className="app-container">
<div className="header"> 
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <p className={'headerName' }> Профиль</p>
    <p className={`headerName ${isSidebarOpen ? 'shifted' : ''}`}>Профиль</p>
    <LanguageDropdown />
</div>

<div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
    <p className='mainName'> Профиль</p>
    <p>Some content here...</p>
</div>
</div>
    );
}
  
  export default ProfilePage;
  
//   <div className={styles['app-container']}>
//   <div className={styles.header}> {/* Контейнер для Sidebar и LanguageDropdown */}
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <p className={styles.headerName }> Профиль</p>
//       <p className={`${styles.headerName} ${isSidebarOpen ? styles.headerNameShifted : ''}`}>Профиль</p>
//       <LanguageDropdown />
//   </div>

//   <div className={`${styles.mainContent} ${isSidebarOpen ? styles.mainContentShifted : ''}`}>
//       <p className={styles.mainName}> Профиль</p>
//       <p>Some content here...</p>
//   </div>
// </div>


{/* <div className="app-container">
<div className="header"> 
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <p className={'headerName' }> Профиль</p>
    <p className={`headerName ${isSidebarOpen ? 'shifted' : ''}`}>Профиль</p>
    <LanguageDropdown />
</div>

<div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
    <p className='mainName'> Профиль</p>
    <p>Some content here...</p>
</div>
</div> */}