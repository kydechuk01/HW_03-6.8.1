let console_wrk = document.querySelector('#console');
console_wrk.addEventListener('click', ()=> {
    console.log(Date(),'Сработал обработчик передачи события в консоль.');
    alert('Команда console.log() служит для вывода сообщений в консоль браузера.');

});

let alert_wrk = document.querySelector('#alert');
alert_wrk.addEventListener('click', ()=> {
    console.log(Date(),'Сработал обработчик передачи события в консоль.');
    alert('Команда alert() служит для вывода сообщений в браузер в виде модального окна, прерывающего работу с веб-страницей.');

})

let prompt_wrk = document.querySelector('#prompt');
prompt_wrk.addEventListener('click', ()=> {
    console.log(Date(),'Сработал обработчик передачи события в консоль.');
    prompt('Команда prompt() служит для вывода сообщений в браузер в виде модального окна, прерывающего работу с веб-страницей. При этом пользователю предлагается ввести текст в поле ввода. Данное значение может быть записано в переменную и быть использовано в обработке страницы.', 'Понятно');

})

