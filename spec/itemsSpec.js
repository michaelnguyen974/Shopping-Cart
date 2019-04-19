describe("Items", () => {

  describe("Checks state of item properties", () => {
    it("checks for property id in first object", () => {
      expect(items[0].id).toEqual(0)
    })

    it("checks for property name in first object", () => {
      expect(items[0].name).toEqual("Almond Toe Court Shoes, Patent Black")
    })

    it("checks for property category in first object", () => {
      expect(items[0].category).toEqual("Women’s Footwear")
    })

    it("checks for property price in first object", () => {
      expect(items[0].price).toEqual(99.00)
    })

    it("checks for initial property stock in first object", () => {
      expect(items[0].stock).toEqual(5)
    })
  })

})