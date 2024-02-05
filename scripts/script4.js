let mylink = document.querySelector('#mylink');
let mylinkText = '';

mylink.addEventListener ('click', function(event){
    event.preventDefault();
    mylinkText = prompt('Введите новое значение для текста ссылки');
    if (mylinkText) { // проверка на случай, если пользователь нажал отмену и нам была передана пустая строка в ответе
        mylink.textContent = mylinkText;
        }
        else { 
            console.log('Ввод нового текста был отменен')
        };
    })