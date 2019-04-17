describe("Cart", () => {

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
    item3 = {
      id: 2,
      name: "Leather Driver Saddle Loafers, Tan",
      category: "Men’s Footwear",
      price: 34.00,
      stock: 12
  }
  })

  describe("adding to array", () => {
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
  })

  describe("Total price in cart", () => {
    it("Checks total in the cart for two items", () => {
      cart.add(item1)
      cart.add(item2)
      cart.calculateTotal()
      expect(cart.total).toEqual(141.00)
    })

    it("Checks for total in the cart for more than two items", () => {
      cart.add(item1)
      cart.add(item2)
      cart.add(item3)
      cart.calculateTotal()
      expect(cart.total).toEqual(175.00)
    })

  })

  it("Removes items from cart", () => {
    cart.add(item1)
    cart.add(item2)
    cart.add(item3)
    cart.removeItem(item1)
    expect(cart.cartArray).toEqual([item2, item3])
  })
 
})