//oq o carrinho faz?

//casos de uso:





//✅add item 
async function addItem(userCart,item) {
    userCart.push(item)
    console.log(`O item ${item.name} foi add ao carrinho`)
}

//deletar item
async function delItem(userCart,name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index != -1){
        userCart.splice(index,1)
        console.log(`o item ${userCart[index].name} foi deletado `)
    }
}
//remover item 
async function remItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    console.log("item encontrado no index: " + indexFound)

    if (indexFound === -1) {
        console.log("Item nao encontrado")
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1 
        console.log(`🔁 Reduzida 1 unidade de "${item.name}". Nova quantidade: ${userCart[indexFound].quantity}`)
    } else {
        await delItem(userCart, item.name)
    }
}

//calcular o total
async function calcTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subTotal(), 0);
    console.log("O total do carrinho é: " + result);
}

async function displayCart(userCart) {
    console.log("\n Shopee conteudo carrinho")
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | subtotal ${item.subTotal()}`)
    })
}


export {
    addItem,
    delItem,
    remItem,
    calcTotal,
    displayCart, 
}