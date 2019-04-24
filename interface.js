function iniitalize () {
  var itemList = "<table border='1|1'>";
  var shoppingCartList = document.getElementById("shoppingCartList")
  var total = document.getElementById("total")

  var cart = new Cart
    
  function showItems() {
    items.forEach( (item, index) => {
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

  var renderCart = () => {
    shoppingCartList.innerHTML = '';
    cart.cartArray.forEach( (element) => {
      shoppingCartList.innerHTML += `<p id="cart${element.id}">${element.name} ${element.price}<button id="remove${element.id}">Remove from cart</button></p>`;
      var removeButton = document.getElementById('remove'+element.id);
      removeButton.addEventListener('click', () => {
        cart.removeItem(element);
        renderCart();
        renderTotal();
      });
    })
  }

  var renderTotal = () => {
    total.innerHTML = "£" + cart.calculateTotal();
  }

  var addToButtonFunctionality = () => {
    items.forEach( (element, index) => {
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