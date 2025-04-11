import React, { useState } from 'react';
import ProfileItem from './profileItem';
import DoubleProfileItem from './doubleProfileItem';
import ProfileItemHeader from './profileItemHeader';

function ProfileEmployeeInfo({post}) {
    const [isExpanded, setIsExpanded] = useState(true); 

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    const getDepartmentsString = () => {
        if (Array.isArray(post.departments)) {
            return post.departments.map(department => department.name).join(', '); 
        }
        return ""; 
        };

    return (
        <div>
            <ProfileItemHeader  name1={post.postName.name} name2={null}  onClick={toggleExpanded} />
           
            {isExpanded && (
                <div>
                <DoubleProfileItem  name1="Вид занятости" text1={post.employmentType} name2="Ставка" text2={post.rate}/>
                <ProfileItem name="Место работы" text={getDepartmentsString()} /> 
                <ProfileItem name="Тип должности" text={post.postType.name} />
                <DoubleProfileItem  name1="Дата приема на работу" text1={post.dateStart} name2="Дата уввольнения" text2={post.dateStart}/>
                </div>
            )}

        </div>
    );
}

export default ProfileEmployeeInfo;