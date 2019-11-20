let input;
let total = 0;
while (true) {
  input = prompt("Введите любое число:");

  if (input === null) {
    break;
  }
  input = Number(input);
  total += input;
}
console.log(`Общая сумма введенных чисел равна ${total} `);
