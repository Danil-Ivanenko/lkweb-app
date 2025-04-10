import React, { useState, useEffect} from 'react';
import LanguageDropdown from '../components/LanguageDropdown'
import Sidebar from '../components/Sidebar';
import  '../csses/sidebar.css'
import '../csses/profile.css'
import {useSelector, useDispatch} from 'react-redux'
import {loadProfileThunkCreator} from '../reducers/profile-reducer';
import { loadStudentThunkCreator } from '../reducers/profile-reducer'; // Данные студента
import { loadEmployeeThunkCreator } from '../reducers/profile-reducer'; // Данные работника

import ProfileItem from '../components/profile/profileItem';

function ProfilePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    var state = useSelector((state) => state.profileReducer);
    const studentState = useSelector((state) => state.profileReducer.student); 
    const employeeState = useSelector((state) => state.profileReducer.employee); 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProfileThunkCreator());
        dispatch(loadStudentThunkCreator());
        dispatch(loadEmployeeThunkCreator());
    }, [dispatch]);
    console.log(state)
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(loadProfileThunkCreator());
            await dispatch(loadStudentThunkCreator());
            await dispatch(loadEmployeeThunkCreator());


            if (studentState.id != null) {
                setActiveSection('study');
            } else if (employeeState.id != 400) {  // Передеалать когда починят
                setActiveSection('work');
            } else {
                setActiveSection(null); 
            }
        };

        fetchData();
    }, [dispatch, studentState.id, employeeState.id]);

    const toggleSection = () => {
        setActiveSection((prevSection) => {
            if (prevSection === 'study'  && employeeState.Status == 400 ) {  //// Передеалать когда починят && employeeState.status == 400
                return 'work';
            } else if (prevSection === 'work'  && studentState.id != null) {// 
                return 'study';
            } else {
                return prevSection; 
            }
        });
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
                    
                    { Array.isArray(state.profile.contacts) ? (
                            state.profile.contacts.map((contact, index) => (
                            <ProfileItem name={contact.type} text={contact.value} key={index}/>
                            ))
                        ) : (
                            ""
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
   
                        Array.isArray(studentState.educationEntries) ? (
                            studentState.educationEntries.map((educationEntry) => (
                                <div key={educationEntry.id}>
                                <ProfileItem name="Факультет" text={educationEntry.faculty.name || "Нет данных"} />
                                <ProfileItem name="Группа" text={educationEntry.group.name || "Нет данных"} />
                                <ProfileItem name="Статус обучения" text={educationEntry.educationStatus.name || "Нет данных"} />
                                <ProfileItem name="Основа обучения" text={educationEntry.educationBase.name || "Нет данных"} />
                                <ProfileItem name="Направление обучения" text={educationEntry.educationDirection.name || "Нет данных"} />
                                <ProfileItem name="Профиль обучения" text={educationEntry.educationProfile.name || "Нет данных"} />
                                <ProfileItem name="Квалификация" text={educationEntry.educationQualification.name || "Нет данных"} />
                                <ProfileItem name="Уровень образования" text={educationEntry.educationLevel.name || "Нет данных"} />
                                <ProfileItem name="Форма обучения" text={educationEntry.educationForm.name || "Нет данных"} />
                                <ProfileItem name="Годы обучения" text={educationEntry.educationYears.name || "Нет данных"} />
                                <ProfileItem name="Номер зачетной книжки" text={educationEntry.creditBooknumber || "Нет данных"} />
                                <ProfileItem name="Курс" text={educationEntry.course || "Нет данных"} />
                                <ProfileItem name="Год поступления" text={educationEntry.admissionYear || "Нет данных"} />
                            </div>
                            ))
                        ) : ("")
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
  
