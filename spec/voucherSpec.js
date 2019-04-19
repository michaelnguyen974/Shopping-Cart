describe("Voucher", () => {
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

  it("input of '5off' voucher decreases total by £5", () => {
    cart.add(item1)
    cart.applyVoucher("5off")
    expect(cart.total).toEqual(94.00)
  })
})