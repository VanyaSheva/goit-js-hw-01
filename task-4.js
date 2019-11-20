let credits = 23580;
const pricePerDroid = 3000;
let userChoise = prompt('Укажите количество дроидов которые вы хотите заказать:');
let message;
let totalPrice=userChoise*pricePerDroid;

if (userChoise === null){
    message = "Отменено пользователем";
}
else  if (totalPrice < credits){
    credits = credits - totalPrice;
    message=`Вы купили ${userChoise} дроидов, на счету осталось ${credits} кредитов.`;
}
else {
    message = 'Недостаточно средств на счету!';
}
console.log(message);
