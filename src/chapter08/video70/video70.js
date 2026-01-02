const saveBtn = document.getElementById('btnSave');
const inputName = document.getElementById('name');

function getRandomId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        const myTodo = {
            id: getRandomId(1, 9999),
            name: inputName.value
        }
        const currentTodoStr = localStorage.getItem('todo');
        if (currentTodoStr) {

            //convert string to object
            const currentTodo = JSON.parse(currentTodoStr);

            //push current todo to array

            currentTodo.push(myTodo);
            localStorage.setItem('todo', JSON.stringify(currentTodo));

        } else {
            localStorage.setItem('todo', JSON.stringify([myTodo]));

        }

        //success message
        window.location.href = "video70.html";

    });
}
const generateTableTodo = () => {
    const todoListStr = localStorage.getItem('todo');
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);// converst string to object
        //insert data html

        const tbody = document.querySelector("#todoList tbody");
        if (todoList && todoList.length) {
            todoList.forEach((todo, index) => {
                tbody.innerHTML += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td><button data-id="${todo.id}" class="btn-delete">Xóa</button></td>
            </tr>
    `
            })
        }
    }
}

generateTableTodo();

const deleteBtns = document.querySelectorAll('.btn-delete');
if (deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            handleDeleteTodo(id);
        })
    })
}

const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem('todo');
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);// converst string to object
        const newTodo = todoList.filter((todo, index) => todo.id + "" !== id);
        localStorage.setItem('todo', JSON.stringify(newTodo));
        window.location.reload();
    }
}