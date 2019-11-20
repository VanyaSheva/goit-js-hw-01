let countryOfDelivery = prompt(
  "Выберите страну доставки товара :"
).toLowerCase();
let cost;
const message = "В вашей стране доставка не доступна";
switch (countryOfDelivery) {
  case "китай":
    cost = 100;
    alert(
      `Доставка в ${countryOfDelivery.charAt(0).toUpperCase() +
        countryOfDelivery
          .substr(1)
          .toLowerCase()} будет стоить ${cost} кредитов`
    );
    break;

  case "чили":
    cost = 250;
    alert(
      `Доставка в ${countryOfDelivery.charAt(0).toUpperCase() +
        countryOfDelivery
          .substr(1)
          .toLowerCase()} будет стоить ${cost} кредитов`
    );
    break;

  case "австралия":
    cost = 170;
    alert(
      `Доставка в ${countryOfDelivery.charAt(0).toUpperCase() +
        countryOfDelivery
          .substr(1)
          .toLowerCase()} будет стоить ${cost} кредитов`
    );
    break;

  case "индия":
    cost = 80;
    alert(
      `Доставка в ${countryOfDelivery.charAt(0).toUpperCase() +
        countryOfDelivery
          .substr(1)
          .toLowerCase()} будет стоить ${cost} кредитов`
    );
    break;

  case "ямайка":
    cost = 120;
    alert(
      `Доставка в ${countryOfDelivery.charAt(0).toUpperCase() +
        countryOfDelivery
          .substr(1)
          .toLowerCase()} будет стоить ${cost} кредитов`
    );
    break;

  default:
    alert(message);
}
