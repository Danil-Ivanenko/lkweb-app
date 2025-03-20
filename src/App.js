import './App.css';
import NewsContainer from './components/example/newsContainer';
import EditNews from './components/example/editNews';
import LoginUser from './components/login/loginComponent' 
import loginPhoto from './loginPhoto.svg'; 
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





function App() {
  return (
    
<div className="App">


  <div className="container">
    
    <div className="col">
      <img src={loginPhoto} alt="Login" />
    </div>
    <LoginUser/>

  </div>
</div>
  );
}


export default App;

