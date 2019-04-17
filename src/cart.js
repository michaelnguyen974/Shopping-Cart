class Cart {
  constructor() {
    this.cartArray = []
    this.total = 0
  }

  add(item) {
    this.cartArray.push(item)
  }

  calculateTotal() {
    var reducedTotal = this.cartArray.reduce( (previous, current) => {
      return this.total = previous + current.price
    },0)
    return reducedTotal
  }

}