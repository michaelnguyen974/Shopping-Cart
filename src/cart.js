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

  removeItem(item) {
      var position = this.cartArray.lastIndexOf(item)
      this.cartArray.splice(position, 1)
  }

  applyVoucher(voucher_input) {
    if (voucher_input === "5off") {
      return this.total -= 5
    } 
    if(voucher_input === "10off" && this.total > 50) {
      return this.total -= 10
    }
  }
}