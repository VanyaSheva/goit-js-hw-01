const total = 100;
const ordered = prompt("Укажите количество товаров к вашему заказу:");

let message;

if (ordered > total) {
  message = "На складе недостаточно товаров!";
} else if (ordered !== null) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else {
  message = "Вы отменили выбор товара";
}
console.log(message);
