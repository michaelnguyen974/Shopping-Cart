describe("Cart", () => {
var cart
var item1
  beforeEach(() => {
    cart = new Cart
    item1 = { id: 0, 
    name: "Almond Toe Court Shoes, Patent Black", 
    category: "Women’s Footwear",
    price: 99.00,
    stock: 5
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

  it("a")

})