const clickerCounter = document.getElementById("clicker__counter");
const cookieImgClick = document.getElementById("cookie");
const clickFps = document.getElementById("clicker__fps"); 
let counter = 0;

let oldClickTime = Date.now();

cookieImgClick.addEventListener('click', () => {
  let clickTime = Date.now();
  let result = ((clickTime - oldClickTime) / 60 ).toFixed(2);
  clickFps.textContent = '' + result;
  oldClickTime = clickTime;
  counter++;
  clickerCounter.textContent = '' + counter;
  if (cookieImgClick.width === 200) {
    cookieImgClick.width = 250;
  } else {
    cookieImgClick.width = 200;
  }
});
  


// Максим, доброе утро!

// Тяжело смотреть по скриншоту. Пришлите, пожалуйсат ссылку на ваш
//  репозиторий с кодом.

// Вообще, логика подсчета скорости клика такая: необходимо 
// вычислить разницу во времени между кликами и посчитать, 
// сколько кликов можно сделать за 1 секунду. 

// Для этого заведите 
// переменную, которая будет хранить время последнего клика
//  (можно сделать ее равной по умолчанию Date.now()).

// Далее в обработчике высчитываете разность между текущим 
// временем (снова Date.now()) и временем последнего клика. 

// Эту разность преобразуете в секунды и делите 1 на эту разность.
//  Всё. Останется только сократить полученное число до 2 знаков после 
//  запятой и переопределить время последнего клика текущим временем.