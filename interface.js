function iniitalize () {
  var itemList = "<table border='1|1'>";













  function showItems() {
    for (var i = 0; i < items.length; i++) {
        itemList +="<tr>";
        itemList += "<td>" +  items[i].name + "</td>"
        itemList += "<td>" + items[i].category + "</td>"
        itemList += "<td> " + items[i].price + "</td>"
        itemList += "<td> " + items[i].stock  + "</td>" 
        itemList += ` <td> <button id=${items.id}>add to cart</button> </td>`
        itemList +="</tr>";
    }
    itemList +="</table>";
    document.getElementById("itemsList").innerHTML = itemList;
}

  showItems()
}

window.addEventListener("DOMContentLoaded", iniitalize)