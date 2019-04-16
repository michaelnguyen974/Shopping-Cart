describe("Cart", () => {
var cart
  beforeEach(() => {
    cart = new Cart
  })
  it("cart has an array of items", () => {
    expect(cart.cartArray).toEqual([])
  })
})