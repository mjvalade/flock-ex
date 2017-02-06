let todoInput = $('#todo-field');
let submitButton = $('.submit');


function saveTodo() {
  let todo = todoInput.value;
  $('.list-group').append(todoTemplate(todo));
}

$(submitButton).on('click', function () {
  return saveTodo();
  });

function todoTemplate(todo) {
  return "<li class='list-group-item'>" +
  "<div class='display-title-field'>" + todo + "</div>" +
  "</li>";
}
