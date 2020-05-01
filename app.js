import './main.scss'

let addData = document.querySelector('.add-data')
let inputForm = document.querySelector('.form-group')
let inputData = document.querySelector('.input-field')
let searchBox = document.querySelector('.search-box')
let todoList = document.querySelector('.todo-item')

if (localStorage.getItem('todos') !== null) {
  let todoArray = JSON.parse(localStorage.getItem('todos'))

  //? ==> creating list using local storages data...
  todoArray.forEach(function (value) {
    //? => item div
    let newItem = document.createElement('div');
    newItem.classList.add('todo-list-item')

    //?=> li element
    let todoText = document.createElement('li')
    todoText.classList.add('todo-text')
    todoText.innerText = value
    newItem.appendChild(todoText)

    //? => Complete icon..
    let todoComplete = document.createElement('button')
    todoComplete.classList.add('todo-complete')
    todoComplete.innerHTML = '<i class="fas fa-check"></i>'
    newItem.appendChild(todoComplete)

    //? => Delete icon...
    let todoDelete = document.createElement('button')
    todoDelete.classList.add('todo-delete')
    todoDelete.innerHTML = '<i class="fas fa-trash-alt"></i>'
    newItem.appendChild(todoDelete)

    todoList.appendChild(newItem)

    searchBox.addEventListener('click', function (e) {
      let todos = todoList.childNodes
      todos.forEach(function (todo) {
        switch (e.target.value) {
          case "all": {
            todo.style.display = "flex"
            break;
          }
          case "completed": {
            if (todo.classList.contains("done")) {
              todo.style.display = "flex"
            } else {
              todo.style.display = "none"
            }
            break;
          }
          case "uncompleted": {
            if (!todo.classList.contains("done")) {
              todo.style.display = "flex"
            } else {
              todo.style.display = "none"
            }
            break;
          }
        }
      })
    })

    //? => Delete functionalities...
    todoDelete.addEventListener('click', function (event) {
      event.preventDefault();
      let getBlock = event.target.parentElement
      let grabDelValue = getBlock.childNodes[0].innerText
      delTodo(grabDelValue)

      getBlock.classList.toggle('complete')
      getBlock.addEventListener('animationend', function () {
        getBlock.remove()
      })
    })

    //? => complete functionalities...
    todoComplete.addEventListener('click', function (event) {
      event.preventDefault()
      let getBlock = event.target.parentElement;

      getBlock.classList.toggle('done')
    })
  })

}

//? => Adding new data....
addData.addEventListener('click', function (event) {
  event.preventDefault()
  //? => check before add the box is empty or not...
  if (inputData.value != false) {
    //? => item div
    let newItem = document.createElement('div');
    newItem.classList.add('todo-list-item')

    //?=> li element
    let todoText = document.createElement('li')
    todoText.classList.add('todo-text')
    todoText.innerText = inputData.value
    saveTodo(inputData.value)
    inputData.value = ""
    newItem.appendChild(todoText)

    //? => Complete icon..
    let todoComplete = document.createElement('button')
    todoComplete.classList.add('todo-complete')
    todoComplete.innerHTML = '<i class="fas fa-check"></i>'
    newItem.appendChild(todoComplete)

    //? => Delete icon...
    let todoDelete = document.createElement('button')
    todoDelete.classList.add('todo-delete')
    todoDelete.innerHTML = '<i class="fas fa-trash-alt"></i>'
    newItem.appendChild(todoDelete)

    //? => Append item to list...
    todoList.appendChild(newItem)


    //? => Delete functionalities...
    todoDelete.addEventListener('click', function (event) {
      event.preventDefault();
      let getBlock = event.target.parentElement
      let grabDelValue = getBlock.childNodes[0].innerText
      delTodo(grabDelValue)

      getBlock.classList.toggle('complete')
      getBlock.addEventListener('animationend', function () {
        getBlock.remove()
      })
    })

    //? => complete functionalities...
    todoComplete.addEventListener('click', function (event) {
      event.preventDefault()
      let getBlock = event.target.parentElement;

      getBlock.classList.toggle('done')
    })
  } else {
    inputForm.classList.toggle('shake');
    inputForm.addEventListener('animationend', function (event) {
      let classes = [...inputForm.classList].splice(0, 1);
      inputForm.classList = classes;
    })
  }
})


//? => Todo storing functionalities...
function saveTodo(data) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem("todos"))
  }
  if (data) {
    todos.push(data)
  }
  localStorage.setItem("todos", JSON.stringify(todos))
}

//? => delete deleted todos from localStorage...
function delTodo(data) {
  let newTodo;
  newTodo = JSON.parse(localStorage.getItem('todos'));
  let getInd = JSON.parse(localStorage.getItem('todos')).indexOf(data)
  newTodo.splice(getInd, 1);
  localStorage.clear();
  localStorage.setItem('todos', JSON.stringify(newTodo))
}