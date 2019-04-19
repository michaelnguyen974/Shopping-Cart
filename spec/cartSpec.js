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

  describe("adds to cart", () => {
    it("cart has an array of items", () => {
      expect(cart.cartArray).toEqual([])
    })
  
    it("adds an item to the cart", () => {
      cart.add(item1)
      expect(cart.cartArray).toEqual([item1])
    })
  })

  describe("Total price in cart", () => {

    it("checks that total starts at 0", () => {
      expect(cart.total).toEqual(0)
    })


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

  describe("removes items from the cart", () => {
    it("Removes item from cart", () => {
      cart.add(item1)
      cart.add(item2)
      cart.add(item3)
      cart.removeItem(item1)
      expect(cart.cartArray).toEqual([item2, item3])
    })
  
    it("Removes item from different positions from cart", () => {
      cart.add(item1)
      cart.add(item2)
      cart.add(item3)
      cart.removeItem(item3)
      expect(cart.cartArray).toEqual([item1, item2])
    })
  })

  describe("Voucher", () => {
    it("applied voucher of 5off and reduces total down by £5", () => {
      cart.add(item1)
      cart.calculateTotal()
      cart.applyVoucher("5off")
      expect(cart.total).toEqual(94.00)
    })

  })
 
})