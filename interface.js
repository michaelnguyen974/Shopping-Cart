function iniitalize () {
  var itemList = "<table border='1|1'>";
  var shoppingCartList = document.getElementById("shoppingCartList")
  var total = document.getElementById("total")

  var cart = new Cart
    
  function showItems() {
    items.forEach( function(item, index){
      itemList +="<tr>";
      itemList += "<td>" +  item.name + "</td>"
      itemList += "<td>" + item.category + "</td>"
      itemList += "<td> " + item.price + "</td>"
      itemList += "<td> " + item.stock  + "</td>" 
      itemList += ` <td> <button id=${index}>add to cart</button> </td>`
      itemList +="</tr>";
    })
    itemList += "</table>";
    document.getElementById("itemsList").innerHTML = itemList;
  }

  function renderCart() {
    shoppingCartList.innerHTML = '';
    cart.cartArray.forEach(function(element) {
      shoppingCartList.innerHTML += `<p id="cart${element.id}">${element.name} ${element.price}<button id="remove${element.id}">Remove from cart</button></p>`;
      var removeButton = document.getElementById('remove'+element.id);
      removeButton.addEventListener('click', function() {
        cart.removeItem(element);
        renderCart();
        renderTotal();
      });
    })
  }

  function renderTotal(){
    total.innerHTML = "£" + cart.calculateTotal();
  }

  function addToButtonFunctionality() {
    items.forEach( function(element, index) {
      document.getElementById(index).addEventListener('click', () => {
        cart.add(element)
        renderCart();
        renderTotal();
      })
    })
  }

  showItems()
  addToButtonFunctionality()
}

window.addEventListener("DOMContentLoaded", iniitalize)