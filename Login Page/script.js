var menu = document.getElementById("menu")
var close = document.getElementById("close")
var navcon = document.getElementsByClassName("nav-items-con")
function shownav() {
  navcon[0].style = " right: 0;"
  close.style = "display:block"
}


function hidenav() {
  navcon[0].style = " right: -200px;"
  close.style = "display:none"
}

const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.elements["username"].value;
  const password = form.elements["password"].value;


});


