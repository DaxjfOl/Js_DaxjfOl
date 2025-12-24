console.log("Lab 03")


const products = [
    {
        name: "Nintendo Switch lite",
        price: 300,
        inStock: true
    },
    {
        name: "Playstation 5",
        price: 500,
        inStock: false
    },
    {
        name: "Xbox Series S",
        price: 400,
        inStock: true
    },
    {
        name: "Steam Deck",
        price: 600,
        inStock: false
    },
    {
        name: "Nintendo Switch 2",
        price: 1500,
        inStock: false
    }

]

console.log(products[0].name)
products[2].price = 150
console.log(products)
products.pop()
console.log(products)
products.forEach((value, index) => {
    console.log("value =", value.name)

})

products.map((value, index) => {
    console.log(" Price:", value.price)
})

const inStockProducts = products.filter((value, index) => {
    return value.inStock === true
})
console.log("In Stock Products:", inStockProducts)

for (let key in products[0]) {
    console.log(key, products[0][key])
}