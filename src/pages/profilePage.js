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

import ProfileStudentInfo from '../components/profile/profileStudentInfo';
import ProfileEmployeeInfo from '../components/profile/proileEmployeeInfo';
import ProfileExperience from '../components/profile/profileExperienceInfo';
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
    //console.log(state)
    
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
            } else if (employeeState.id != null) {  // Передеалать когда починят
                setActiveSection('work');
            } else {
                setActiveSection(null); 
            }
        };

        fetchData();
    }, [dispatch, studentState.id, employeeState.id]);

    const toggleSection = () => {
        setActiveSection((prevSection) => {
            if (prevSection === 'study'  && employeeState.id != null ) {  //// Передеалать когда починят && employeeState.status == 400
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
                            studentState.educationEntries.map((educationEntry, index) => (
                                <div key={index}>
                                
                                <ProfileStudentInfo educationEntry={educationEntry} />
                            </div>
                            
                            ))
                        ) : ("")
                    )}

                    {activeSection === 'work' && (
                        <div> 
                       <ProfileExperience experience={employeeState.experience} />
                       
                       { Array.isArray(employeeState.posts) ? (
                            employeeState.posts.map((post, index) => (
                            <div key={index}>
                                
                                <ProfileEmployeeInfo post={post} />
                            </div>
                            
                            ))
                        ) : ("")}
                        
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
  
