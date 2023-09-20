document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById('create-task-form');
  const todoList = document.getElementById('tasks');

  todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    addNewTodo(event.target['new-task-description'].value);
    event.target.reset();
  });

  function addNewTodo(task) {
    const li = document.createElement('li');
    const taskText = document.createTextNode(task);
    li.appendChild(taskText);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (checkbox.checked && confirm('You really wanna delete it?')) {
        li.remove();
      }
    });

    const editTodo = document.createElement('button');
    editTodo.textContent = 'edit';
    editTodo.addEventListener('click', function() {
      const changedTodo = prompt('Change it up a bit!:', taskText.textContent);
      if (changedTodo !== null) {
        taskText.textContent = changedTodo;
      }
    });

    li.appendChild(checkbox)
    li.appendChild(editTodo)
    todoList.appendChild(li);
  }
});