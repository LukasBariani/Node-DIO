const product = require("./services/products");
const config = require("./services/config");

(async function main() {

    console.log(config.client)
    console.log(config.devArea)
    console.log(product.productType)
    console.log(product.getFullName("lukas","viado"))
    
    await product.getUrl()

    // console.log('Carrinho compras')
    // p.getFullName("123", "ronaldo")
    // p.getFullName("1234", "mouse")
    // p.getProductLabel("mousepad")


})()