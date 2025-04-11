import React, { useState } from 'react';
import ProfileItem from './profileItem';
import DoubleProfileItem from './doubleProfileItem';
import ProfileItemHeader from './profileItemHeader';

function ProfileStudentInfo({educationEntry}) {
    const [isExpanded, setIsExpanded] = useState(true); 

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <ProfileItemHeader  name1={educationEntry.educationLevel.name} name2={educationEntry.educationStatus.name}  onClick={toggleExpanded} />
           
            {isExpanded && (
                <div>
                <ProfileItem name="Факультет" text={educationEntry.faculty.name || "Нет данных"} />
                <DoubleProfileItem  name1="Годы обучения" text1={educationEntry.educationYears.name} name2="Номер зачетной книжки" text2={educationEntry.creditBooknumber}/>
                <DoubleProfileItem  name1="Форма обучения" text1={educationEntry.educationForm.name} name2="База" text2={educationEntry.educationBase.name}/>
                
                <ProfileItem name="Факультет" text={educationEntry.faculty.name}  />
                <ProfileItem name="Направление" text={educationEntry.educationDirection.name} />
                <ProfileItem name="Профиль" text={educationEntry.educationProfile.name || "Нет данных"} />
                
                <DoubleProfileItem  name1="Курс" text1={educationEntry.course} name2="Группа" text2={educationEntry.group.name}/>
                </div>
            )}

    </div>
    );
}

export default ProfileStudentInfo;