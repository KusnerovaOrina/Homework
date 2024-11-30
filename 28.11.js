const username = "maria.petrova";
const email = "maria4@gmail.com";
const nickname = "student";
const correctPassword = "student22";

const typelogin = prompt("Введіть тип авторизації: username or email");
if (typelogin === "username") {
    const inputLogin = prompt("Введіть ваш логін: ");
const inputPassword = prompt("Введіть ваш пароль: ");
    if (inputLogin === "maria1234") {
        const inputPassword = prompt("Введіть ваш пароль: ");
          {
            if (inputPassword === "petrova22") {
                alert ("Ваш логін:maria1234 Ваш пароль:petrova22" )
            } else {
                alert ("Неправильний пароль")
            }
        }
       
    } else {
        alert ("Неправильний логін")
    }
}