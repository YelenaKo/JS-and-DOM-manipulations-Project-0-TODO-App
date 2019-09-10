const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo(){
  const todoItem = prompt('Add something!')

  if (todoItem != "" && todoItem != null){
    if(todoItem.length > 30) {
      alert ("Maximum string length 30 characters")
    }else{
      // create li 
      const li = document.createElement('li');
      li.classList.add(classNames.TODO_ITEM);
      const innerTodo = document.createElement('span');
      innerTodo.classList.add(classNames.TODO_TEXT);
      innerTodo.textContent = todoItem;

      // create and count checkboxes
      const todoCheckbox = document.createElement("INPUT");
      todoCheckbox.classList.add(classNames.TODO_CHECKBOX);
      todoCheckbox.setAttribute("type", "checkbox");
      itemCountSpan.innerHTML = document.querySelectorAll('input[type="checkbox"]').length + 1;
      function checkcountCheckboxes() {
        todoCheckbox.addEventListener("click", function(e) {  
          if (e.target.checked) {
            countCheckboxes() 
          } else {
            countCheckboxes() 
          }
        })
      }
      function countCheckboxes(){
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length
        uncheckedCountSpan.innerHTML = Number(itemCountSpan.innerHTML) - checkedBoxes
      }

      // create delete button
      const delBtn = document.createElement("BUTTON");
      delBtn.classList.add(classNames.TODO_DELETE);
      delBtn.innerHTML = "Delete";
      delBtn.onclick = function(e){
        list.removeChild(li);
        itemCountSpan.innerHTML = document.querySelectorAll('input[type="checkbox"]').length;
        countCheckboxes() 
      }
      countCheckboxes() 
      checkcountCheckboxes()

      li.append(todoCheckbox, innerTodo, delBtn);
      list.appendChild(li);
    }
  }
  else false
}