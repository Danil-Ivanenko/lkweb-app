// import './App.css';
// import NewsContainer from './components/example/newsContainer';
// import EditNews from './components/example/editNews';
// import LoginUser from './components/login/loginComponent'
// import loginPhoto from './loginPhoto.svg';
// import { useTranslation } from 'react-i18next';
// import LanguageDropdown from './components/LanguageDropdown'
// import './dropdown.css'
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage'
import Page404 from './pages/Page404'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="404" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// function App() {



//   return (

//     <div className="App">

//       <div className="container-mid">
//         <LanguageDropdown />

//         <div className="container">

//           <div className="col">
//             <img src={loginPhoto} alt="Login" />
//           </div>
//           <LoginUser />

//         </div>
//       </div>
//     </div>
//   );
// }


//export default App;

