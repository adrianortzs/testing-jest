let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0

function addProduct (name, price) {
    const product = {id: id++, name, price}
    products.push(product)
    return product
}

function resetProducts () {
    products = []
    id = 0
}

function removeProduct (id) {
    products.splice(id,1)
}

function getProduct (id) {
    const product = products.find(product => product.id ===id)
    return product
}

function getProducts () {
    return products
}
function updateProduct (id, name, price) {
    const product = products.find(product => product.id ===id)
    if(name) {product.name = name}
    if(price) {product.price = price}
    return product
}

module.exports = { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct, products}