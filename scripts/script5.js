// задаем указатели к объектам html
let sendText = document.querySelector('#send_text');
let getText = document.querySelector('#get_text');
let archiveText = document.querySelector('#archive_text');

// переформатируем текущее время в локальную таймзону
function dateFormat () {
    var today = new Date();
    var textDate = today.toLocaleString();
    return textDate;
};

// читаем новый текст, отправляем его в консоль и архив, очищаем строку ввода
function formProcess () {
    newText = getText.value;
    if (newText) { // пользовател ввел хоть что-нибудь
        console.log(dateFormat(),'Пользователь ввел:',newText);
        archiveText.innerHTML = '<p><span style="color: blue;">' + dateFormat() + ': </span>' + newText + '</p>';
        getText.value = ''; // очищаем поле ввода
    } else {
        console.warn(dateFormat(),'Пользователь отправил пустую строку');
    } ;
};

// обработчик на нажатие Enter внутри поля "get_text"
getText.addEventListener('keyup', function(event) {

       archiveText.textContent = getText.value;
})

sendText.addEventListener('click',function(event) {
    event.preventDefault(); // отключаем реакцию на кнопке submit
    formProcess();
})