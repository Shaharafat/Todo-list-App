import './main.scss'

let addData = document.querySelector('.add-data')
let inputForm = document.querySelector('.form-group')
console.log(inputForm);

let inputData = document.querySelector('.input-field')
let getContainer = document.querySelector('.container')

addData.addEventListener('click', function (event) {
  event.preventDefault()

  if (inputData.value != false) {
    let newItem = document.createElement('form');
    newItem.classList.add('todo-list-item')

    let todoText = document.createElement('input')
    todoText.classList.add('todo-text')
    todoText.setAttribute('type', 'text')
    todoText.setAttribute('readonly', 'true')
    todoText.value = inputData.value
    inputData.value = ""
    newItem.appendChild(todoText)


    let todoComplete = document.createElement('button')
    todoComplete.classList.add('todo-complete')

    newItem.appendChild(todoComplete)

    let tik = document.createElement('i');
    tik.classList.add('fas')
    tik.classList.add('fa-check')
    todoComplete.appendChild(tik)

    let todoDelete = document.createElement('button')
    todoDelete.classList.add('todo-delete')

    newItem.appendChild(todoDelete)

    let del = document.createElement('i');
    del.classList.add('fas')
    del.classList.add('fa-trash-alt')
    todoDelete.appendChild(del)
    getContainer.appendChild(newItem)


    todoDelete.addEventListener('click', function (event) {
      event.preventDefault();
      let getBlock = event.target.parentElement;
      console.log(getBlock);

      getBlock.classList.toggle('complete')
      getBlock.addEventListener('animationend', function () {
        getBlock.remove()
      })
    })

    todoComplete.addEventListener('click', function (event) {
      event.preventDefault()
      let getBlock = event.target.parentElement.children[0];

      getBlock.classList.toggle('done')
    })
  } else {
    inputForm.classList.toggle('shake');
    console.log(inputForm.classList[1]);
    inputForm.addEventListener('animationend', function (event) {
      let classes = [...inputForm.classList].splice(0, 1);
      inputForm.classList = classes;
    })
  }
})


// let deleteBtn = document.querySelector('.todo-delete')
// let doneBtn = document.querySelector('.todo-complete')

// deleteBtn.addEventListener('click', function (event) {
//   event.preventDefault();
//   let getBlock = event.target.parentElement;
//   getBlock.classList.toggle('complete')
//   getBlock.addEventListener('transitionend', function () {
//     getBlock.remove()
//   })
// })

// doneBtn.addEventListener('click', function (event) {
//   event.preventDefault()
//   let getBlock = event.target.parentElement.children[0];
//   console.log(getBlock);

//   getBlock.classList.toggle('done')
// })