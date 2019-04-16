const items = [
  {
      id: 0,
      name: "Almond Toe Court Shoes, Patent Black",
      category: "Women’s Footwear",
      price: 99.00,
      stock: 5
  },
  {
      id: 1,
      name: "Suede Shoes, Blue",
      category: "Women’s Footwear",
      price: 42.00,
      stock: 4
  },
  {
      id: 2,
      name: "Leather Driver Saddle Loafers, Tan",
      category: "Men’s Footwear",
      price: 34.00,
      stock: 12
  },
  {
      id: 3,
      name: "Flip Flops, Red",
      category: "Men’s Footwear",
      price: 19.00,
      stock: 6
  },
  {
      id: 4,
      name: "Flip Flops, Blue",
      category: "Men’s Footwear",
      price: 19.00,
      stock: 0
  },
  {
      id: 5,
      name: "Gold Button Cardigan, Black",
      category: "Women’s Casualwear",
      price: 167.00,
      stock: 6
  },
  {
      id: 6,
      name: "Cotton Shorts, Medium Red",
      category: "Women’s Casualwear",
      price: 30.00,
      stock: 5
  },
  {
      id: 7,
      name: "Fine Stripe Short Sleeve Shirt, Grey",
      category: "Men’s Casualwear",
      price: 49.99,
      stock: 9
  },
  {
      id: 8,
      name: "Fine Stripe Short Sleeve Shirt, Green",
      category: "Men’s Casualwear",
      price: 39.99,
      stock: 3
  },
  {
      id: 9,
      name: "Sharkskin Waistcoat, Charcoal",
      category: "Men’s Formalwear",
      price: 75.00,
      stock: 2
  },
  {
      id: 10,
      name: "Lightweight Patch Pocket Blazer, Deer",
      category: "Men’s Formalwear",
      price: 175.50,
      stock: 1
  },
  {
      id: 11,
      name: "Bird Print Dress, Black",
      category: "Women’s Formalwear",
      price: 270.00,
      stock: 10
  },
  {
      id: 12,
      name: "Mid Twist Cut­Out Dress, Pink",
      category: "Women’s Formalwear",
      price: 540.00,
      stock: 5
  }

] 

function showItems() {
    var html = "<table border='1|1'>";
    for (var i = 0; i < items.length; i++) {
        html +="<tr>";
        html += "<td>" +  items[i].name +"</td>"
        html += "<td>" + items[i].category + "</td>"
        html += "<td> " + items[i].price + "</td>"
        html += "<td> " + items[i].stock + "</td>"
        html +="</tr>";
    }
    html +="</table>";
    document.getElementById("itemsList").innerHTML = html;
}


