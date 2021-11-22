
var removebutton = document.getElementsByClassName("remove");
console.log(removebutton)
for (var i = 0; i < removebutton.length; i++){
    var button = removebutton[i]
    button.addEventListener('click', function (event) {
        var buttonclick = event.target
        buttonclick.parentElement.parentElement.parentElement.parentElement.remove();
       
    })
   

}
