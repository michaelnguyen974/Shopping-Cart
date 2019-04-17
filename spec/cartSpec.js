describe("Cart", () => {
var cart
var item1
  beforeEach(() => {
    cart = new Cart
    item1 = { id: 0, name: "Almond Toe Court Shoes, Patent Black", category: "Women’s Footwear",
    price: 99.00,
    stock: 5
    }
    item2 = { id: 1, name: "Suede Shoes, Blue", category: "Women’s Footwear",
    price: 42.00,
    stock: 4
    }
  })


  it("cart has an array of items", () => {
    expect(cart.cartArray).toEqual([])
  })

  it("adds an item to the cart", () => {
    cart.add(item1)
    expect(cart.cartArray).toEqual(
    [{ id: 0, 
    name: "Almond Toe Court Shoes, Patent Black", 
    category: "Women’s Footwear",
    price: 99.00,
    stock: 5
    }])
  })

  it("Checks for total in the cart", () => {
    cart.add(item1)
    cart.add(item2)
    cart.calculateTotal()
    expect(cart.total).toEqual(141.00)
  })



})