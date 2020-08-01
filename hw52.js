namee.style.backgroundColor = "LightBlue";
namee.style.fontFamily = "sans-serif";

namem.style.backgroundColor = "LightBlue";
namem.style.fontFamily = "sans-serif";


age.style.backgroundColor = "Aquamarine";
age.style.fontFamily = "sans-serif";


number.style.backgroundColor = "LightBlue";
number.style.fontFamily = "sans-serif";


email.style.backgroundColor = "Aquamarine";
email.style.fontFamily = "sans-serif";



const btnJS = document.querySelector('.btn--start');
btnJS.addEventListener('click', () => {


  let d = prompt("Ім'я?", "");
  namee.innerHTML = namee.innerHTML +
    "<font>" + d + "</font>";


  d = prompt("Прізвище?", "");
  namem.innerHTML = namem.innerHTML +
    "<font>" + d + "</font>";


  d = prompt("Вік?", "");
  age.innerHTML = age.innerHTML +
    "<font>" + d + "</font>";


  d = prompt("Номер телефону?", "");
  number.innerHTML = number.innerHTML +
    "<font>" + d + "</font>";


  d = prompt("E-mail?", "");
  email.innerHTML = email.innerHTML +
    "<font>" + d + "</font>";



});





namee.style.backgroundColor = "LightBlue";
namee.style.fontFamily = "sans-serif";

namem.style.backgroundColor = "LightBlue";
namem.style.fontFamily = "sans-serif";


age.style.backgroundColor = "Aquamarine";
age.style.fontFamily = "sans-serif";


number.style.backgroundColor = "LightBlue";
number.style.fontFamily = "sans-serif";


email.style.backgroundColor = "Aquamarine";
email.style.fontFamily = "sans-serif";



const btnJSS = document.querySelector('.btn-clear');
btnJSS.addEventListener('click', () => {

  window.location.href = window.location.href

});