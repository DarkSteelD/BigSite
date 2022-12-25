// Ждем загрузки DOM. Элемент <body> будет загружен автоматически.
window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('button');
  button.addEventListener('click', function(event) {
    // Переключаем класс .opened
    event.target.classList.toggle('opened');
  });

});
