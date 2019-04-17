function iniitalize () {
  var itemList = "<table border='1|1'>";
  var shoppingCartList = document.getElementById("shoppingCartList")
  var total = document.getElementById("total")
  
  var deleteItems = document.getElementsByClassName('delete-item') 

  var cart = new Cart
    
  function showItems() {
    for (var i = 0; i < items.length; i++) {
        itemList +="<tr>";
        itemList += "<td>" +  items[i].name + "</td>"
        itemList += "<td>" + items[i].category + "</td>"
        itemList += "<td> " + items[i].price + "</td>"
        itemList += "<td> " + items[i].stock  + "</td>" 
        itemList += ` <td> <button id=${items[i].id}>add to cart</button> </td>`
        itemList +="</tr>";
    }
    itemList += "</table>";
    document.getElementById("itemsList").innerHTML = itemList;
  }

  function renderCart() {
    var print = "";
    for (let index = 0; index < cart.cartArray.length; index++) {
      print +=  `<p id=${cart.cartArray[index].id}>` +  cart.cartArray[index].name + cart.cartArray[index].price 
      + `<button class='delete-item' id=${cart.cartArray[index].id}>Remove from cart</button> </p>`
    }
    return print
  }

  function renderTotal(){
    cart.calculateTotal()
    return cart.total
  }

  function removeItem() {
    for (let index = 0; index < deleteItems.length; index++) {
      deleteItems[i].addEventListener('click', () => {
        cart.deleteItem()
      })
    }
  }


  function addToButtonFunctionality() {
    for (let index = 0; index < items.length; index++) {
      document.getElementById(index).addEventListener('click', () => {
        cart.add(items[index])
        shoppingCartList.innerHTML = renderCart()
        total.innerHTML = renderTotal()

      })
    }
  }

  showItems()
  addToButtonFunctionality() 
  removeItem()
}


window.addEventListener("DOMContentLoaded", iniitalize)