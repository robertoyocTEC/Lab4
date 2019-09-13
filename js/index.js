document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById('newTodo').onsubmit = function (event) {
        
        event.preventDefault();
        const value = event.target.elements[1].value;
        if (value) {
            document.getElementById('listTodo').innerHTML += `<div><input class="todo-element" type="checkbox">${value}</div>`;
            event.target.elements[1].value = null
        }
    }
    document.getElementById('clearAll').onclick = function (event) {
        const list = document.getElementsByClassName('todo-element');
        Array.from(list).forEach((element)=>{
            element.checked = false;
        })

    }
    document.getElementById('checkAll').onclick = function (event) {
        const list = document.getElementsByClassName('todo-element');
        Array.from(list).forEach((element)=>{
            element.checked = true;
        })

    }
    document.getElementById('deleteAll').onclick = function (event) {
        document.getElementById('listTodo').innerHTML = "";

    }
});