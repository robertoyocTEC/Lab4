document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById('newTodo').onsubmit = function (event) {
        
        event.preventDefault();
        const value = event.target.elements[1].value;
        if (value) {
            const list =  document.getElementById('listTodo').innerHTML += `<div><input type="checkbox">${value}</div>`;
            event.target.elements[1].value = null
        }
    }
    document.getElementById('clearAll').onclick = function (event) {
        
    }
});