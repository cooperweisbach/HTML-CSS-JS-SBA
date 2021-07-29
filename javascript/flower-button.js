var menuButton = document.querySelector(".hidden-flower-button");
var  menuDiv = document.querySelector(".hidden-menu-container");
console.log(menuButton);
console.log(menuButton.classList);
console.log(menuDiv);
console.log(menuDiv.classList);

menuButton.addEventListener("click", displayMenu);

function displayMenu() {
    if(menuDiv.classList.contains("showMenu")){
        menuDiv.classList.remove("showMenu");
    } else {
        menuDiv.classList.add("showMenu");
    }
}