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

//Abrir Modal 
document.querySelector('#list__task-body').addEventListener('click', (event) => {
    //Achando o elemento que Acionou o evento de Click e verificando se ele é uma TD que está dentro de uma tr
    // O método closesst pega o nome do elemento pai que é uma Tr assim posso pegar o id da tarefa e fazer a busca completa dela na lista de tarefas
    let targetElement = event.target;   
    if (targetElement.tagName === 'TD') {      
        let taskRow = targetElement.closest('tr');       
        let taskId = Number(taskRow.dataset.id);      
        let tasks = JSON.parse(localStorage.getItem('listTask'));      
        let taskSelected = tasks.find(task => task.id === taskId);      
        let modalTitle = document.getElementById('exampleModalLabel');
        modalTitle.innerText = taskSelected.title;
        let modalBody = document.getElementById('modal__body');
        modalBody.innerHTML = `
            <p class="text-dark">${taskSelected.description}</p>
        `;     
        //Acionando o Meu Modal
        var target = taskRow.getAttribute('data-target');     
        var modalElement = document.querySelector(target);      
        var modal = new bootstrap.Modal(modalElement);       
        var closeButton = modalElement.querySelector('.close');
        closeButton.addEventListener('click', function () {
            modal.hide();
        });       
        modal.show();
    }
});

//Salvando task a ser enviada para ser alterada na tela editTask
document.querySelector('#list__task-body').addEventListener('click', (event) => {
    let targetElement = event.target;    
    if (targetElement.tagName === 'BUTTON' && targetElement.closest('td')) {        
        let tdElement = targetElement.closest('td');        
        let trElement = tdElement.closest('tr');       
        let taskId = Number(trElement.dataset.id);
        let tasks = JSON.parse(localStorage.getItem('listTask'));      
        let taskSelected = tasks.find(task => task.id === taskId);
        localStorage.setItem('alterTaks',JSON.stringify(taskSelected))
    }
});

