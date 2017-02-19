let $todoInput = document.querySelector('#todo-field');
let $submitButton = document.querySelector('.submit');
// let todoArray = [
//   {},
//   {},
//   {},
//   {},
//   {},
// ];

// function todoTemplate(todo) {
//   return "<li class='list-group-item'>" +
//   "<div class='display-title-field'>" + todo + "</div>" +
//   "</li>";
// }
//
// function clearInputs(){
//   $('#todo-field').val('');
// }

function Todo(name, topic, date, completed){
  this.name = name;
  this.topic = topic;
  this.date = date;
  this.completed = false;
}

function saveTodo() {
  // grab each input item

  // save to object
  // push object into array
  // call function to render array to page
  let todo = $todoInput.value;
  $('.list-group').append(todoTemplate(todo));
}

// $($submitButton).on('click', function () {
//   saveTodo();
//   clearInputs();
// });
