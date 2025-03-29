import styles from '../csses/Error404500.module.css';







function Page404() {

  return (

<div className={styles.App}>
  <div className={styles['container-col']}>
    <p className={styles['huge-text']}>404</p>
    <div className={styles['container-row']} style={{alignItems: "center" , justifyContent: "space-between"}}>
      <p className={styles.pText}> Page not found <br/> Страница не найдена</p>
      <button className={styles.buttonBack}>Вернуться на главную</button>
    </div>
    <div className={styles['container-row']}>
      <p style={{fontSize: "20px"}}>Что случилось? <br/> <br/>Вероятно такой страницы не существует или вы ошиблись при вводе адреса в строку браузера</p>
    </div>
  </div>
  <div class={styles['ribbon-3']}>Ошибка Ошибка Ошибка Ошибка Ошибка</div>    
  <div class={styles['ribbon-2']}>Ошибка Ошибка Ошибка Ошибка Ошибка Ошибка Ошибка Ошибка</div>    
</div>

  );
}


export default Page404;

