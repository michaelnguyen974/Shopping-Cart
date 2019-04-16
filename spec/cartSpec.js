

describe("Cart", () => {
  it("cart has an array of items", () => {
    cart = new Cart
    expect(cart.cartArray).toEqual([])
  })
})