import styles from  '../csses/login.module.css';
import NewsContainer from '../components/example/newsContainer';
import EditNews from '../components/example/editNews';
import LoginUser from '../components/login/loginComponent'
import loginPhoto from '../loginPhoto.svg';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from '../components/LanguageDropdown'

// function App() {
//   return (
//     <div className="App">
//       <img src={loginPhoto}/>
//       <div className='container'>
//         <EditNews/>
//         <NewsContainer/>

//       </div>
//     </div>
//   );
// }





function LoginPage() {

  return (

    <div className={styles.App}>

      <div className={styles['container-mid']}>
        <LanguageDropdown />

        <div className={styles.container}>

          <div className={styles.col}>
            <img src={loginPhoto} alt="Login" />
          </div>
          <LoginUser />

        </div>
      </div>
    </div>
  );
}


export default LoginPage;

