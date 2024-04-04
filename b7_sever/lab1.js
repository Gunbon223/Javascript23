let todos = "";

function createList() {
let li = document.createElement('li')
let input = document.createElement('input')
input.setAttribute('type', 'checkbox')
let span = document.createElement('span')
let buttonAdd = document.createElement('button')
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

btnAdd.addEventListener('click' , async () => {
    const title = inputTodo.value.trim();
    if (title ==="") {
        alert("Enter to do work");
        return;
    }
    const newTodo = {
        title,
        status: false
    }
    try {
        const response = axios.post(api_url, newTodo);
        console.log(response);
        todos.push(response.data);
        renderTodos(todos);
    }
    catch (error) {
        console.log(error);
    }


    todos.push(newTodo);
    renderTodos(todos);
    inputTodo = "";
    inputTodo.focus();
})


async function toggleStatus(id) {
    todos = todos.map((todo) => {
        if(todo.id === id) {
            todo.status = !todo.status;
        }
        return todo;
    });
    try {
        const response = axios.put(`${api_url}/${id}`, todos.find((todo) => todo.id === id));
        }
    catch (error) {
        console.log(error);
    }
    renderTodos(todos);
}

async function deleteTodo(id) {
    const confirm = window.confirm("Delete!")
    if(confirm) {
    todos = todos.filter((todo) => {
        return todo.id !== id
    });
    try {
        const response = axios.delete(`${api_url}/${id}`);
        }
    catch (error) {
        console.log(error);
    }
    renderTodos(todos);
    }
}


async function editTodo(id) {
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
        try {
            const response = axios.put(`${api_url}/${id}`,todos.find((todo) => todo.id === id));
            }
        catch (error) {
            console.log(error);
        }
        renderTodos(todos);    
    }
    else {
        return;
    }
}

let buttonFind = document.getElementById('btn-find')
buttonFind.addEventListener('click', async () =>{
    const title = inputTodo.value.trim();
    if(title === null) {
        alert("Khong duoc de trong");
    }
    else if(title) {
        try {
            const response = await axios.get(`${api_url}?q=${title}`);
            const findItem = response.data
            renderTodos(findItem);
            }
        catch (error) {
            console.log(error);
        }
    }
    else {
        return;
    }
});


const api_url = "http://localhost:6010/todos";
const getAllTodos = async () => {
    try {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
        todos = data;
        renderTodos(todos);
    }
    catch (error) {
    console.log(error);
}
}

getAllTodos();


