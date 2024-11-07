const form = document.querySelector('#form');
const field = document.querySelector('#field');
const button = document.querySelector('#button');
const todoWrapper = document.querySelector('#todo-items');

function validate (field) {
    if (field.value.length < 4) {
        alert("Eng kamida 4 ta belgidan iborat bo'lsin");
        field.focus();
        return false
    }

    return true;
}

function createCard (data) {
    return `     <div class="todo-item">
    <p>${data.name}</p>
    <span>delete</span>
</div>  
    `
}

function getdataFromLocalStorage() {
 let data = [];
 if (localStorage.getItem('todos')) {
    data = JSON.parse(localStorage.getItem('todos'))
 }
 return data
}


button && button.addEventListener('click', function(event){
    event.preventDefault();


    const isValid = validate(field);
    if (!isValid) {
        return
    }

    const todo = {
id : Date.now(),
name : field.value
    }


    const card = createCard(todo);
    todoWrapper.innerHTML += card;
    field.value = '';

    let todos = getdataFromLocalStorage();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
})

document.addEventListener('DOMContentLoaded', function(){
    let todos = getdataFromLocalStorage();

    todos.forEach(todo => {
        let card = createCard(todo);
        todoWrapper.appendChild(card);
    });
})
