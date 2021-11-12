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
}

let typed = new Typed(".auto-input", {
  strings: ["Global Figures", "1ST Figures Store", "Selling With Heart"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
})




let productImg = document.getElementById("productImg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  productImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  productImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  productImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  productImg.src = smallimg[3].src;
};

