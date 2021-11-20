
var removebutton = document.getElementsByClassName("remove");
console.log(removebutton)
for (var i = 0; i < removebutton.length; i++){
    var button = removebutton[i]
    button.addEventListener('click', function (event) {
        var buttonclick = event.target
        buttonclick.parentElement.parentElement.parentElement.parentElement.remove()
        updateCart()
    })
   

}
function updateCart() {
    var cartitem = document.getElementsByClassName("cart-product")[0]
    var cartrows = cartitem.getElementsByClassName("product-info")
    var total = 0
    for (var i = 0; i < cartrows.length; i++){
        var cartrow = cartrows[i]
        
        var priceE = cartrow.getElementsByClassName("price")[0]
        var quantityE = cartrow.getElementsByClassName("qtt")[0]
        var price = parseFloat(priceE.innerText.replace('đ', ''))
        var quantity = quantityE.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('total-price')[0].innerText = total + 'đ'

}