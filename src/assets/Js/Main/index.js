//Verificando se usuário está logado

let userLogged = JSON.parse(localStorage.getItem('userLogged'));
if (userLogged == null) {
    window.location.href = 'login.html'
}
let userNameHeader = document.getElementById('userLoggadeName')
userNameHeader.innerText = userLogged.name
//Logout
function userLogout() {
    localStorage.removeItem('userLogged')
    window.location.href = 'login.html'
}

document.querySelector('#list__task-body').addEventListener('click', (event) => {
    let taskId = Number(event.target.dataset.id);
    let tasks = JSON.parse(localStorage.getItem('listTask'));
    let taskSelectd = tasks.find(task => task.id == taskId);
    
    let modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText= taskSelectd.title;
    let modalBody = document.getElementById('modal__body');
    modalBody.innerHTML = `
    <p class="text-dark">${taskSelectd.description}</p>
    `

    var target = document.querySelector('.task__row-table').getAttribute('data-target');
    var modalElement = document.querySelector(target);
    var modal = new bootstrap.Modal(modalElement);

    var closeButton = modalElement.querySelector('.close');
    closeButton.addEventListener('click', function () {
        modal.hide();
        document.body.classList.remove('modal-open');
        modalElement.classList.remove('show');
    });
    modal.show();
})



