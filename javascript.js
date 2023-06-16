let button = document.getElementById('add')
let todolist = document.getElementById('todolist')
let input = document.getElementById('input');
//local stroage
let todos = [];
window.onload=()=>{
    todos = JSON.parse(localstroage.getItem('todos')) || []
    todos.foreach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para=document.createElement('p');
    para.innerText = todo;
    todolist.appendChild(para)
    localStorage.setItem('todos',JSON.stringify(todos))
    para.addEvenListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    
})
para.addEventListener('dbclick',()=>{
    todolist.removeChild(para)
    remove(todo)
})

function remove(todo){
    let index=todos.indexOf(todo)
    if (index > -1){
        todos.splice(index,1);
    }
}