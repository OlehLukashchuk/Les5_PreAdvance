import {
  beer,
  vine,
  pepsi,
  arr,
  rightDiv,
  blockAlert,
  alertMess,
} from "./main.js";

// Зміна кількості Пива на складі,відносно отриманого замовлення та обрахунок заробітку і додавання результату в массив arr (замикання)
function buyBeer(beerNum) {
  return function (extrBeer) {
    let priceOfBeer = 30;
    //Показуємо алерт,якщо кількість товару при замовленні перевищує товар на складі.
    if (extrBeer > beerNum) {
      alertMess.innerHTML += `На складі не достатньо товару : Пиво , усього на складі ${beer.value} | `;
      blockAlert.style.opacity = 1;
      blockAlert.style.zIndex = 1;
    }
    // Основні обрахунки.
    else {
      beer.value = `${beerNum - extrBeer} шт`;
      beerNum -= extrBeer;
      priceOfBeer *= extrBeer;
      arr.push(priceOfBeer);
      rightDiv.innerHTML += `<span>Пиво : ${extrBeer} шт</span>`;
    }
  };
}

// Зміна кількості Вина на складі,відносно отриманого замовлення та обрахунок заробітку і додавання результату в массив arr (замикання)
function buyVine(vineNum) {
  return function (extrVine) {
    let priceOfVine = 150;
    if (extrVine > vineNum) {
      alertMess.innerHTML += `На складі не достатньо товару : Вино , усього на складі ${vine.value} | `;
      blockAlert.style.opacity = 1;
      blockAlert.style.zIndex = 1;
    } else {
      vine.value = `${vineNum - extrVine} шт`;
      vineNum -= extrVine;
      priceOfVine *= extrVine;
      arr.push(priceOfVine);
      rightDiv.innerHTML += `<span>Вино : ${extrVine} шт</span>`;
    }
  };
}

// Зміна кількості Пепсі на складі,відносно отриманого замовлення та обрахунок заробітку і додавання результату в массив arr (замикання)
function buyPepsi(pepsiNum) {
  return function (extrPepsi) {
    let priceOfPepsi = 20;
    if (extrPepsi > pepsiNum) {
      alertMess.innerHTML += `На складі не достатньо товару : Пепсі , усього на складі ${pepsi.value} | `;
      blockAlert.style.opacity = 1;
      blockAlert.style.zIndex = 1;
    } else {
      pepsi.value = `${pepsiNum - extrPepsi} шт`;
      pepsiNum -= extrPepsi;
      priceOfPepsi *= extrPepsi;
      arr.push(priceOfPepsi);
      rightDiv.innerHTML += `<span>Пепсі : ${extrPepsi} шт</span>`;
    }
  };
}

export { buyBeer, buyVine, buyPepsi };
