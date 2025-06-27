import createItem  from "./services/item.js"
import * as cartService from "./services/cart.js"

//casos user: 

console.log("welcome to shopee kart")

const cart = [] 
const wishList = [] 

const item1 = await createItem("Grildo", 120, 1)
const item2 = await createItem("Ambakutan", 150, 2)



await cartService.addItem(cart,item1)
await cartService.addItem(cart,item2)

await cartService.remItem(cart, item1)


await cartService.displayCart(cart)
await cartService.calcTotal(cart)