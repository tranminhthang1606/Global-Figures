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

let sub = document.getElementById("sub");
let add = document.getElementById("add");
let val = document.getElementById("val");

add.addEventListener("click", function() {
  val.value = parseInt(val.value) + 1;
});

sub.addEventListener("click", function() {
  if (val.value <= 1) {
    val.value = parseInt(val.value);
  } else {
    val.value = parseInt(val.value) - 1;
  }
});


 

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


