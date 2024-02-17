const input_data = document.querySelector("#inputdata");
const addBtn = document.querySelector("#addbtn");
const tasks_container = document.querySelector(".tasks_container");

// Function to save data to localStorage
function savedata() {
    localStorage.setItem("data", tasks_container.innerHTML);
}

// Function to load data from localStorage
function showdata() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        tasks_container.innerHTML = savedData;
        attachEventListeners(); // Attach event listeners after loading data
    }
}

// Attach event listeners to edit and delete buttons
function attachEventListeners() {
    const editButtons = document.querySelectorAll(".tasks_container button");
    editButtons.forEach(editBtn => {
        editBtn.addEventListener('click', () => {
            const task = editBtn.parentElement.querySelector("p");
            input_data.value = task.innerText;
            task.parentElement.remove();
            savedata();
        });
    });
}

// Load saved data on page load
window.addEventListener('load', showdata);

addBtn.addEventListener('click', () => {
    if (input_data.value.trim().length == '') return;

    const taskcontainer = document.createElement("div");
    taskcontainer.classList.add('container');

    const tasks = document.createElement("p");
    tasks.innerHTML = input_data.value;

    const editbtn = document.createElement("button");
    editbtn.innerText = "EDIT";

    editbtn.addEventListener('click', () => {
        input_data.value = tasks.innerText;
        taskcontainer.remove();
        savedata();
    });

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "DELETE";

    deletebtn.addEventListener('click', () => {
        taskcontainer.remove();
        savedata();
    });

    taskcontainer.appendChild(tasks);
    taskcontainer.appendChild(editbtn);
    taskcontainer.appendChild(deletebtn);
    tasks_container.appendChild(taskcontainer);

    savedata();
    input_data.value = "";
});
