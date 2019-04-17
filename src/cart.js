class Cart {
  constructor() {
    this.cartArray = []
    this.total = 0
  }

  add(item) {
    this.cartArray.push(item)
  }

  calculateTotal() {
    this.cartArray.forEach( (value, index, array) => {
      return this.total += value.price
    })
    
  }

}