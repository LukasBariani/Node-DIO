//caso uso itens 

//criar item com subtotal calculado 
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subTotal() {
            return this.price * this.quantity;
        }
    };
}

export default createItem