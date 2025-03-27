import '../csses/Error404500.css';







function Page404() {

  return (

<div className="App">
  <div className="container-col">
    <p className="huge-text">404</p>
    <div className="container-row" style={{alignItems: "center" , justifyContent: "space-between"}}>
      <p>Page not found <br/> Страница не найдена</p>
      <button>Вернуться на главную</button>
    </div>
    <div className="container-row">
      <p style={{fontSize: "20px"}}>Что случилось? <br/> <br/>Вероятно такой страницы не существует или вы ошиблись при вводе адреса в строку браузера</p>
    </div>
  </div>
  <div class="ribbon-3">Ошибка Ошибка Ошибка Ошибка Ошибка</div>    
  <div class="ribbon-2">Ошибка Ошибка Ошибка Ошибка Ошибка Ошибка Ошибка Ошибка</div>    
</div>

  );
}


export default Page404;

