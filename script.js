let MenuItem = document.getElementById("Menu-item");
MenuItem.style.maxHeight = "0px";

function MenuToggle() {
    if (MenuItem.style.maxHeight == "0px") {
        MenuItem.style.maxHeight = "200px"
    }
    else {
        MenuItem.style.maxHeight = "0px"
    }
}




var Loginform = document.getElementById("Loginform");
var Regform = document.getElementById("Registerform");
var line = document.getElementById("line");

function register() {
  Loginform.style.transform = 'translateX(0px)';
    Regform.style.transform = 'translateX(0px)';
    line.style.transform = 'translateX(100px)';
}

function login() {
  Loginform.style.transform = "translateX(300px)";
    Regform.style.transform = "translateX(300px)";
    line.style.transform = "translateX(0px)";
};




 




