let next = document.getElementsByClassName("page")
for (i = 1; i <= next.Length; i++){
    next[i].addEventListener("click", function () {
        next[i].classList.add("active")
    })
}