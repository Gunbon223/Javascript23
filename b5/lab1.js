let todos = [
{
    id: 1,
    title: 'Work out',
    status: true,

},
{
    id: 2,
    title: 'Drink coffee',
    status: true,
},
{
    id: 3,
    title: 'Play game',
    status: true,
},
{
    id: 4,
    title: 'Sleep',
    status: false,
}
]


function createList() {
let li = document.createElement('li')
let input = document.createElement('input')
input.setAttribute('type', 'checkbox')
let span = document.createElement('span')
let buttonAdd = document.createElement('button')
button
}

const ulElement = document.querySelector('ul')
const renderTodos = (todos) => {
    ulElement.innerHTML = '';
    if(todos.length === 0) {
        ulElement.insertAdjacentHTML('afterbegin', '<li>Nothing to do</li>')
        return;
    }

    let html ="";
    todos.forEach(element => {
        if(element.status) {
            html += `
            <li>
                <input type="checkbox" checked onchange = "toggleStatus(${element.id})">
                <span class = "active">${element.title}</span>
                <button onclick="editTodo(${element.id})">Edit</button>
                <button onclick="deleteTodo(${element.id})" >Delete</button>
            </li>        
            `;    
        }
        else {
            html += `
            <li>
                <input type="checkbox" onchange = "toggleStatus(${element.id})">
                <span class = "">${element.title}</span>
                <button onclick="editTodo(${element.id})">Edit</button>
                <button onclick="deleteTodo(${element.id})" >Delete</button>
            </li>          
            `;
        }
    });
    ulElement.innerHTML = html;
}

renderTodos(todos);

const inputTodo = document.getElementById("input-todo");
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener('click' , () => {
    const title = inputTodo.value.trim();
    if (title ==="") {
        alert("Enter to do work");
        return;
    }
    const newTodo = {
        id: generateId(),
        title,
        status: false
    }

    todos.push(newTodo);
    renderTodos(todos);
    inputTodo = "";
    inputTodo.focus();
})

function generateId() {
    return Date.now();
}
function toggleStatus(id) {
    todos = todos.map((todo) => {
        if(todo.id === id) {
            todo.status = !todo.status;
        }
        return todo;
    });
    renderTodos(todos);
}

function editTodo(id) {
    const newTitle = prompt("Enter new title");
    if(newTitle === null) {
        alert("Khong duoc de trong");
    }
    else if(newTitle) {
        todos = todos.map((todo) => {
            if(todo.id === id) {
                return {...todo, title: newTitle};
            }
            return todo;
        });
        renderTodos(todos);    
    }
    else {
        return;
    }
}



function deleteTodo(id) {
    const confirm = window.confirm("Delete!")
    if(confirm) {
    todos = todos.filter((todo) => {
        return todo.id !== id
    });
    renderTodos(todos);
    }
}

