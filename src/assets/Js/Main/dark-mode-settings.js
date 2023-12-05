
let darkChecked = JSON.parse(localStorage.getItem('darkStatus'))
let buttonChecked = document.querySelector('#dark-mode-toggle')
if (buttonChecked != null) {
    buttonChecked.checked = darkChecked
    if (buttonChecked.checked) {
        let darkModeStyleInsert = document.createElement("link");
        darkModeStyleInsert.setAttribute("rel", "stylesheet");
        darkModeStyleInsert.setAttribute("href", "src/assets/Css/dark-mode-style.css");
        darkModeStyleInsert.setAttribute("id", "dark-mode");
        document.head.appendChild(darkModeStyleInsert);
    } else {
        let darkModeStyleRemove = document.getElementById("dark-mode")
        if (darkModeStyleRemove) {
            darkModeStyleRemove.parentNode.removeChild(darkModeStyleRemove)
        }
    }
}


document.querySelector('#dark-mode-toggle').addEventListener('change', (event) => {
    localStorage.setItem('darkStatus', JSON.stringify(event.target.checked))
    if (event.target.checked) {
        let darkModeStyleInsert = document.createElement("link");
        darkModeStyleInsert.setAttribute("rel", "stylesheet");
        darkModeStyleInsert.setAttribute("href", "src/assets/Css/dark-mode-style.css");
        darkModeStyleInsert.setAttribute("id", "dark-mode");
        document.head.appendChild(darkModeStyleInsert);
    } else {
        let darkModeStyleRemove = document.getElementById("dark-mode")
        if (darkModeStyleRemove) {
            darkModeStyleRemove.parentNode.removeChild(darkModeStyleRemove)
        }
    }
})