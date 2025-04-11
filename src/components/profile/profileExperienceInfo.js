import React, { useState } from 'react';
import ProfileItem from './profileItem';
import DoubleProfileItem from './doubleProfileItem';
import ProfileItemHeader from './profileItemHeader';

function ProfileExperience({experience}) {
    const [isExpanded, setIsExpanded] = useState(true); 

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    
    const createExperienceInfo = () => {
        if (!Array.isArray(experience) || experience.length === 0) {
            return ""; 
        }
    
        const doubleProfileItems = [];
    
        for (let i = 0; i < experience.length; i += 2) {
            const item1 = experience[i];
            const item2 = experience[i + 1]; // Проверяем, есть ли второй элемент
    

            if (item1) {

                if (item2) 
                {
                    doubleProfileItems.push(
                        <DoubleProfileItem
                            key={`${i}-${i+1}`}
                            name1={item1.type}  
                            text1={item1.years + " год " + item1.months + " месяц "}
                            name2={item2.type}
                            text2={item2.years + " год " + item2.months + " месяц "}
                        />
                    );
                } 
                else 
                { 
                    doubleProfileItems.push(
                        <DoubleProfileItem
                            key={`${i}-solo`} 
                            name1={item1.type}  
                            text1={item1.years + " год " + item1.months + " месяц "}
                            name2=""  
                            text2=""   
                        />
                    );
                }
            }
        }

        return doubleProfileItems

    };

    return (
        <div>
            <ProfileItemHeader name1="Стаж" onClick={toggleExpanded} />
                
                {isExpanded && (
                        createExperienceInfo()
                    )}
        </div>
    );
}

export default ProfileExperience;