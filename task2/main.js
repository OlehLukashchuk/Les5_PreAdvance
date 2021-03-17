import { buyBeer, buyVine, buyPepsi } from "./shop.js";

//Усі доступи до елементів DOM
let rightDiv = document.querySelector(".right");
let allCheckBoxes = document.getElementsByName("drinks");
let money = document.querySelector(".balance");
let beer = document.querySelector(".beer");
let vine = document.querySelector(".vine");
let pepsi = document.querySelector(".pepsi");
let addAmount = document.getElementById("addAmount");
let btnAdd = document.getElementById("add");
let btnBuy = document.getElementById("buy");
let area = document.getElementById("area");
let blockAlert = document.querySelector(".alert");
let btnClose = document.querySelector(".close");
let btnX = document.querySelector(".x");
let alertMess = document.querySelector(".alertMessage");

// Перетворення стрічки в число з іпнутів.
let balToNum = Number(money.value.split(" ").splice(0, 1));
let beerToNum = Number(beer.value.split(" ").splice(0, 1));
let vineToNum = Number(vine.value.split(" ").splice(0, 1));
let pepsiToNum = Number(pepsi.value.split(" ").splice(0, 1));


// Додаткові массиви і змінні для зберігання данних.
let checkAllBoxes = [];
let arr = [];
let amountOfBeer = 0;
let amountOfVine = 0;
let amountOfPepsi = 0;


//Замикання,виклик функцій з shop.js
let startBalanceBeer = buyBeer(beerToNum);
let startBalanceVine = buyVine(vineToNum);
let startBalancePepsi = buyPepsi(pepsiToNum);


// Подія кліку на кнопку 'Додати'
btnAdd.addEventListener("click", function () {
  let areaSpans = document.querySelectorAll(".areaSpan");

  // Умова на внесення максимум 4 товарів
  if (areaSpans.length < 4) {
    checkAllBoxes = [];
    let checkAmount = parseInt(addAmount.value);

    for (let i = 0; i < allCheckBoxes.length; i++) {
      checkAllBoxes.push(allCheckBoxes[i].checked);
    }
    // Продовження операцій лише при умові ,якщо вибраний хочаб 1 чекбокс і поле для внесення кількості продукту не пусте.
    if (
      checkAllBoxes.join(" ").split(" ").includes("true") &&
      addAmount.value !== ""
    ) {

      //Додавання тексту про вибраний продукт і його кількість в залежності від вибраного чекбоксу.
      for (let i = 0; i < allCheckBoxes.length; i++) {
        if (allCheckBoxes[i].checked && allCheckBoxes[i].id == "beer") {
          // Додаємо число в наші змінні відносно кількості товару.
          amountOfBeer += checkAmount;
          if (amountOfBeer > 0) {
            area.innerHTML += `<span class="areaSpan">Пиво : ${checkAmount} шт</span>`;
          }
        } else if (allCheckBoxes[i].checked && allCheckBoxes[i].id == "vine") {
          area.value += `Вино : ${checkAmount} шт`;
          amountOfVine += checkAmount;
          if (amountOfVine > 0) {
            area.innerHTML += `<span class="areaSpan">Вино : ${checkAmount} шт</span>`;
          }
        } else if (allCheckBoxes[i].checked && allCheckBoxes[i].id == "pepsi") {
          area.value += `Пепсі : ${checkAmount} шт`;
          amountOfPepsi += checkAmount;
          if (amountOfPepsi > 0) {
            area.innerHTML += `<span class="areaSpan">Пепсі : ${checkAmount} шт</span>`;
          }
        }
      }
      btnBuy.classList.add("btnHover");
      btnBuy.disabled = false;
    }
    //Якщо не вибраний чекбокс видаємо алерт.
    else {
      alert("Оберіть товар та вкажіть потрібну Вам кількість.");
    }
  }
  // При спробі додати більше 4 товарів - алерт.
  else {
    alert("Максимальна кількість товарів у кошику");
  }
});

//Подія кліку на 'Купити'
btnBuy.addEventListener("click", function () {
  let sum = 0;
  rightDiv.innerHTML = "";
  // При умові коли наші змінні , отримали хочаб 1 товар запускаємо обрахунок з shop.js.
  if (amountOfBeer !== 0) {
    startBalanceBeer(amountOfBeer);
  }
  if (amountOfVine !== 0) {
    startBalanceVine(amountOfVine);
  }
  if (amountOfPepsi !== 0) {
    startBalancePepsi(amountOfPepsi);
  }
  // Суммуємо усю валюту з массиву arr.
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  //Змінюємо наші іпнути та зачищаємно необхідні нам елементи(поля,массиви,змінні,вигляд кнопок)
  money.value = `${balToNum + sum} грн`;
  balToNum = Number(money.value.split(" ").splice(0, 1));
  rightDiv.innerHTML += `<span> Всього ${sum} грн</span>`;
  arr = [];
  amountOfBeer = 0;
  amountOfVine = 0;
  amountOfPepsi = 0;
  area.value = "";
  addAmount.value = "";
  area.innerHTML = "";
  btnBuy.disabled = true;
  btnBuy.classList.remove("btnHover");
});

// Приховування блоку alert при кліку на хрестик і кнопку 'Close'
btnX.addEventListener("click", function () {
  blockAlert.style.opacity = 0;
  blockAlert.style.zIndex = -1;
  alertMess.innerHTML = "";
});

btnClose.addEventListener("click", function () {
  blockAlert.style.opacity = 0;
  blockAlert.style.zIndex = -1;
  alertMess.innerHTML = "";
});

// Функція для вибору лише 1 чекбокса.
function oneChecked() {
  for (let i = 0; i < allCheckBoxes.length; i++) {
    allCheckBoxes[i].addEventListener("click", function () {
      for (let q = 0; q < allCheckBoxes.length; q++) {
        allCheckBoxes[q].checked = false;
        allCheckBoxes[i].checked = true;
      }
    });
  }
}

oneChecked();


export { beer, money, vine, pepsi, arr, rightDiv, blockAlert, alertMess };
