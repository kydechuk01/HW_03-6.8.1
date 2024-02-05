// список цветов лампы (расширяемый в перспективе)
const colorCycle = ["black", "red", "yellow", "green"];

// стартовые значения цветов ламп и указателей
let lamp1_color = 0;
let lamp2_color = 0;
let lamp3_color = 0;
let lamp1 = document.querySelector("#lamp1");
let lamp2 = document.querySelector("#lamp2");
let lamp3 = document.querySelector("#lamp3");

// меняем цвета целевой лампы на заданный по номеру
function changeLight(lamp, colorNum) {
  lamp.style.background = colorCycle[colorNum];
}

// циклически меняем номер цвета лампы на следующий, начиная цикл с #1 в списке цветов
function shiftLampColor(lamp) {
  let newlamp = lamp + 1;
  if (newlamp > colorCycle.length - 1) {
    newlamp = 1;
  }
  return newlamp;
}

// подключаем события обработки клика на каждую лампу

lamp1.addEventListener("click", () => {
  // lamp1 clicked
  lamp1_color = shiftLampColor(lamp1_color);
  lamp2_color = 0;
  lamp3_color = 0;
  changeLight(lamp1, lamp1_color);
  changeLight(lamp2, lamp2_color);
  changeLight(lamp3, lamp2_color);
});

lamp2.addEventListener("click", () => {
  // lamp2 clicked
  lamp1_color = 0;
  lamp2_color = shiftLampColor(lamp2_color);
  lamp3_color = 0;
  changeLight(lamp1, lamp1_color);
  changeLight(lamp2, lamp2_color);
  changeLight(lamp3, lamp3_color);
});

lamp3.addEventListener("click", () => {
  // lamp3 clicked
  lamp1_color = 0;
  lamp2_color = 0;
  lamp3_color = shiftLampColor(lamp3_color);
  changeLight(lamp1, lamp1_color);
  changeLight(lamp2, lamp2_color);
  changeLight(lamp3, lamp3_color);
});
