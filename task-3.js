const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let checkUserPassword = prompt("Пожалуйста, укажите ваш пароль:");

if (checkUserPassword === null) {
  message = "Отменено пользователем!";
} else if (checkUserPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
