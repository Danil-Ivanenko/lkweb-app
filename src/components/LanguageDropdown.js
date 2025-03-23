import React, { useState } from 'react';
import {useTranslation} from 'react-i18next';



function LanguageDropdown() {
  
  
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'ru');  //Деструктурирующее присваивание

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); 
  };

  const languageOptions = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
  ];

  return (
    <header  style={{ display : "flex" , justifyContent: "flex-end", padding :"20px"}}>
        
      <select  style={{ fontSize: '16px'  } }
        id="languageSelect"
        value={selectedLanguage}
        onChange={handleLanguageChange} 
      >
        {languageOptions.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name} 
          </option>
        ))}

      </select>
    </header>
  );
}

export default LanguageDropdown;