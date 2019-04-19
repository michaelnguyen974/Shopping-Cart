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
    if(this.containsFootWear(voucher_input)) {
      return this.total -= 15
    }
  }

  containsFootWear(voucher_input) {
    for (let index = 0; index < cart.cartArray.length; index++) {
      if (voucher_input === "15off" && this.total > 75 &&cart.cartArray[index].category.includes("Footwear")) {
        return true
      } else {
        return false
      }
    }
  }
}
