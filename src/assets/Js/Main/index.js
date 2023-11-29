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


//Modal Task
function ModalTask() {
    var target = document.querySelector('.task__row-table').getAttribute('data-target');
    var modalElement = document.querySelector(target);
    var modal = new bootstrap.Modal(modalElement);
    var closeButton = modalElement.querySelector('.close');
    closeButton.addEventListener('click', function () {
        modal.hide();
        document.body.classList.remove('modal-open');
        modalElement.classList.remove('show');
    });
    modal.show()
}


