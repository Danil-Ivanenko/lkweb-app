import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RFphoto from '../RF.svg';
import UKphoto from '../UK.svg';
import '../dropdown.css';
function LanguageDropdown() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'ru');  //Деструктурирующее присваивание

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setSelectedLanguage(languageCode);
  };
  const setButtonText= (languageCode) => {
    if(languageCode == 'ru')
    {
        return( <p style={{ display : "flex" , justifyContent: "space-between"}}>
        Русский 	&emsp;  <img src={RFphoto}/>
      </p>)
    }
    if(languageCode == 'en')
    {
        return( <p style={{ display : "flex" , justifyContent: "space-between"}}>
        English  	&emsp; <img src={UKphoto} />
      </p>)
    }
  }

  return (
    <header style={{ display : "flex" , justifyContent: "flex-end", padding :"20px"}}>
      <div className="dropdown">
        <button className="dropbtn" >
        {setButtonText(selectedLanguage)}
        </button>
        <div className="dropdown-content">
          <p onClick={() => handleLanguageChange('ru')} style={{ display : "flex" , justifyContent: "space-between"}}>
            Русский <img src={RFphoto}/>
          </p>
          <p onClick={() => handleLanguageChange('en')} style={{ display : "flex" , justifyContent: "space-between"}}>
            English <img src={UKphoto} />
          </p>
        </div>
      </div>
    </header>
  );


}

export default LanguageDropdown;