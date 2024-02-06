// список цветов лампы (расширяемый в перспективе)
const colorCycle = ["black", "green", "yellow", "red"];

// стартовые значения цветов ламп и указателей
let nextLamp = 1; // первая лампа, которая будет включена
let lamp1 = document.querySelector("#lamp1");
let lamp2 = document.querySelector("#lamp2");
let lamp3 = document.querySelector("#lamp3");

// меняем цвета целевой лампы на заданный по номеру
function changeLight() {
  switch (nextLamp) {
      case 1:
        lamp1.style.background = colorCycle[1];
        lamp2.style.background = colorCycle[0];
        lamp3.style.background = colorCycle[0];
        nextLamp++;
        break;
      case 2:
        lamp1.style.background = colorCycle[0];
        lamp2.style.background = colorCycle[2];
        lamp3.style.background = colorCycle[0];
        nextLamp++;
        break;
      case 3:
        lamp1.style.background = colorCycle[0];
        lamp2.style.background = colorCycle[0];
        lamp3.style.background = colorCycle[3];
        nextLamp = 1;
  }
};

// подключаем события обработки клика на каждую лампу

lamp1.addEventListener("click", () => {
  // lamp1 clicked
  changeLight();
});

lamp2.addEventListener("click", () => {
  // lamp2 clicked
  changeLight();
});

lamp3.addEventListener("click", () => {
  // lamp3 clicked
  changeLight();
});
