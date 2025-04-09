import React, { useState, useEffect} from 'react';
import LanguageDropdown from '../components/LanguageDropdown'
import Sidebar from '../components/Sidebar';
import  '../csses/sidebar.css'
import '../csses/profile.css'
import {useSelector, useDispatch} from 'react-redux'
import {loadProfileThunkCreator} from '../reducers/profile-reducer';
import ProfileItem from '../components/profile/profileItem';

function ProfilePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    var state = useSelector((state) => state.profileReducer);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(loadProfileThunkCreator());}, [dispatch]);
    console.log(state)
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [activeSection, setActiveSection] = useState('study'); 

    const toggleSection = () => {
        setActiveSection(prevSection => (prevSection === 'study' ? 'work' : 'study'));
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
    
                    <ProfileItem name={"Пол"} text={state.profile.gender}/>
                    
                    <ProfileItem name={"Дата рождения"} text={state.profile.birthDate}/>
            
                    <ProfileItem name={"Гражданство"} text={state.profile.citizenship.name}/>

                    <ProfileItem name={"Email"} text={state.profile.email}/>

                </div>
                <div className='simpleForm'>
                <p className='smallH'>Контакты</p>
                    
                    <p> Доделать</p>
                    {state.profile.contacts && Array.isArray(state.profile.contacts) ? (
                            state.profile.contacts.map((contact) => (
                            <ProfileItem name={contact.type} text={contact.value}/>
                            ))
                        ) : (
                            <p>Нет контактов</p>
                    )}
                    <ProfileItem name={"Адрес"} text={state.profile.address}/>

                </div>
            </div>


            <div className='containerCol'>
                <p  className='smallH'> {state.profile.lastName + ' ' + state.profile.firstName + ' ' + state.profile.patronymic} </p>
                <div className='simpleForm'>
                    <p onClick={toggleSection} style={{cursor: 'pointer'}}>Образование  Работа</p>
                    <hr className="hr" />
                    {activeSection === 'study' && (
                        <div className='inSimpleForm'>
                            <p> Образование </p>
                            <p className='gray'> Дополнительный E-mail </p>
                            <p> study@mail.com </p>
                            <hr className="hr" />
                        </div>
                    )}

                    {activeSection === 'work' && (
                        <div className='inSimpleForm'>
                            <p> Работа</p>
                            <p className='gray'> Дополнительный E-mail </p>
                            <p> Какойй-то текст </p>
                            <hr className="hr" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}
  
  export default ProfilePage;
  
