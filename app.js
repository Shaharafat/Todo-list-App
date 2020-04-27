import './main.scss'

let deleteBtn = document.getElementById('todo-delete')
console.log(deleteBtn);

deleteBtn.addEventListener('click', function (event) {
  event.preventDefault();
  // console.log(event.target.classList);
  
  // event.target.id.toggle('just-delete')
  // console.log(.className.toggle('completed'));
  let getBlock = event.target.parentElement;
  getBlock.classList.toggle('complete')
  // console.log(getBlock.classList);  
})