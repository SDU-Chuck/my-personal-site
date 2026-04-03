// 待办清单功能
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// 加载本地存储的任务
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function render() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const delBtn = document.createElement('button');
        delBtn.textContent = '删除';
        delBtn.onclick = () => {
            todos.splice(index, 1);
            saveAndRender();
        };
        li.appendChild(delBtn);
        todoList.appendChild(li);
    });
}

function saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(todos));
    render();
}

addBtn.addEventListener('click', () => {
    const val = input.value.trim();
    if (val) {
        todos.push(val);
        saveAndRender();
        input.value = '';
    }
});

render();