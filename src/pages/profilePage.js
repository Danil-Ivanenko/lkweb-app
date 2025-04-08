import React, { useState } from 'react';
import LanguageDropdown from '../components/LanguageDropdown'
import Sidebar from '../components/Sidebar';
import  '../csses/sidebar.css'
import '../csses/profile.css'
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
        <div className='containerRow'>
            <div className='containerCol'>
                <div className='simpleForm'>
                    <p className='smallH'>Личные данные</p>
                    <div className='inSimpleForm'>
                        <p className='gray'> Пол </p>
                        <p> Женский </p>
                        <hr className="hr" />
                    </div>

                    <div className='inSimpleForm'>
                        <p className='gray'> Дата рождения </p>
                        <p>  01.01.1999 </p>
                        <hr className="hr" />
                    </div>

                    <div className='inSimpleForm'>
                        <p className='gray'> Гражданство </p>
                        <p> Россия </p>
                        <hr className="hr" />
                    </div>

                    <div className='inSimpleForm'>
                        <p className='gray'> СНИЛС </p>
                        <p> 000 000 000 000 </p>
                        <hr className="hr" />
                    </div>

                    <div className='inSimpleForm'>
                        <p className='gray'> Email </p>
                        <p> study@mail.com </p>
                        <hr className="hr" />
                    </div>
                    

                </div>
                <div className='simpleForm'>
                <p className='smallH'>Контакты</p>
                    
                    <div className='inSimpleForm'>
                        <p className='gray'> Телефон </p>
                        <p> +7 (955) 255-25-25 </p>
                        <hr className="hr" />
                    </div>

                    <div className='inSimpleForm'>
                        <p className='gray'> Телефон 2 </p>
                        <p> +7 (955) 255-25-25 </p>
                        <hr className="hr" />
                    </div>

                    <div className='inSimpleForm'>
                        <p className='gray'> Дополнительный E-mail </p>
                        <p> study@mail.com </p>
                        <hr className="hr" />
                    </div>

                    <div className='inSimpleForm'>
                        <p className='gray'> Адрес </p>
                        <p> г.Томск, ул.Колхозная, д.15 </p>
                        <hr className="hr" />
                    </div>

                </div>
            </div>

            <div className='containerCol'>
                <div className='simpleForm'>
                    <p>Образование Работа</p>

                    <div className='inSimpleForm'>
                        <p> Стаж </p>
                        <p className='gray'> Дополнительный E-mail </p>
                        <p> study@mail.com </p>
                        <hr className="hr" />
                    </div>
                </div>
            </div>
        </div>
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