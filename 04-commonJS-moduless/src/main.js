const {getFullName, productType} = require("./services/products");  /*get/import the especifi functions*/

const product = require("./services/products"); /*get/import all functions*/
const config = require("./services/config");
const database = require("./services/database");

(async function main() {

    // console.log(config.client)
    // console.log(config.devArea)
    // console.log(product.productType)
    // console.log(product.getFullName("lukas","viado"))
    
    getFullName("321","mousepad")
    

    database.connnectToData("carlosData")

    // console.log('Carrinho compras')
    // product.getFullName("123", "ronaldo")
    // product.getFullName("1234", "mouse")
    // pro.getProductLabel("mousepad")


})()