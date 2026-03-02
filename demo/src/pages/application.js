function addToLocalStorage() {
    const newTask = $('#todoLS')[0].value;
    const tasks = localStorage.getItem('tasks');
    if (!tasks) {
        localStorage.setItem('tasks', JSON.stringify([newTask]));
    } else {
        const tasksArray = JSON.parse(tasks);
        tasksArray.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
    getFromLocalStorage();
}

function getFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    const tasksArray = tasks ? JSON.parse(tasks) : [];
    const resultLS = $('#localStorageList')[0];
    resultLS.innerHTML = '';
    tasksArray.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        resultLS.appendChild(li);
    });
}

function addToSessionStorage() {
    const newTask = $('#todoSS')[0].value;
    const tasks = sessionStorage.getItem('tasks');
    if (!tasks) {
        sessionStorage.setItem('tasks', JSON.stringify([newTask]));
    } else {            
        const tasksArray = JSON.parse(tasks);
        tasksArray.push(newTask);
        sessionStorage.setItem('tasks', JSON.stringify(tasksArray));       
    }
    getFromSessionStorage();
}

function getFromSessionStorage() {
    const tasks = sessionStorage.getItem('tasks');
    const tasksArray = tasks ? JSON.parse(tasks) : [];
    const resultSS = $('#sessionStorageList')[0];
    resultSS.innerHTML = '';
    tasksArray.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        resultSS.appendChild(li);
    });
}

$('#loginForm').submit(function(event) {
    event.preventDefault();
    const username = $('#username')[0].value;
    const password = $('#password')[0].value;

    $.ajax({
        url: 'http://localhost:8080/auth/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ username, password }),
        xhrFields: {
            withCredentials: true // Include cookies in the request
        },
        success: function(response) {
            debugger;
            console.log('Login successful:', response);
        },
        error: function(xhr, status, error) {
            console.error('Login failed:', error);
        }
    }); 
});

$(document).ready(function() {
    getFromLocalStorage();
    getFromSessionStorage();
});