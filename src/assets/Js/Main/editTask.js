let task = JSON.parse(localStorage.getItem('alterTaks'))
setTaskToForm()
function setTaskToForm() {
    document.getElementById('taskTitle').value = task.title
    document.getElementById('dateStart').value = task.dateStart
    document.getElementById('timeStart').value = task.timeStart
    document.getElementById('dateEnd').value = task.dateEnd
    document.getElementById('timeEnd').value = task.timeEnd
    document.getElementById('description').value = task.description
}

//UpdateTask
document.querySelector('#alterTaskButton').addEventListener('click', (event) => {
    event.preventDefault()
    task.title = document.getElementById('taskTitle').value
    task.dateStart = document.getElementById('dateStart').value
    task.timeStart = document.getElementById('timeStart').value
    task.dateEnd = document.getElementById('dateEnd').value
    task.timeEnd = document.getElementById('timeEnd').value
    task.description = document.getElementById('description').value
    let listTasks = JSON.parse(localStorage.getItem('listTask'))
    let indexTask = listTasks.findIndex(taskList => taskList.id == task.id)
    listTasks[indexTask] = task
    localStorage.setItem('listTask', JSON.stringify(listTasks))
    document.getElementById('alertTaskUpdate').classList.add('show')
    setTimeout(() => {
        document.getElementById('alertTaskUpdate').classList.remove('show')
        window.location.href = 'index.html'
    }, 2000)
})

//DeleteTask Open Confirm
document.querySelector('#deleteTaskButton').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('confirmDeleteTaks').classList.add('show')

})
//DeleteTaks
document.querySelector('#confirmDeleteButtons').addEventListener('click', (event) => {
    document.getElementById('confirmDeleteTaks').classList.remove('show')
    let buttonClicked = event.target.dataset.id
    if (buttonClicked === "1") {
        let listTasks = JSON.parse(localStorage.getItem('listTask'))
        let newListTask = listTasks.filter(taskList => taskList.id != task.id)
        localStorage.setItem('listTask', JSON.stringify(newListTask))
        document.getElementById('alertTasksDelete').classList.add('show')
        setTimeout(() => {
            document.getElementById('alertTasksDelete').classList.remove('show')
            window.location.href = 'index.html'
        }, 2000)
    }
})

//Alter Task Status for complete 

document.querySelector('#alterStatusTaksButton').addEventListener('click', (event) => {
    event.preventDefault()
    
    task.status = 3
    let listTask = JSON.parse(localStorage.getItem('listTask'))
    let taskIndex = listTask.findIndex(taskList => taskList.id==task.id)
    listTask[taskIndex] = task
    localStorage.setItem('listTask',JSON.stringify(listTask))
    document.getElementById('alertTaskUpdate').classList.add('show')
    setTimeout(() => {
        document.getElementById('alertTaskUpdate').classList.remove('show')
        window.location.href = 'index.html'
    }, 2000)
})
