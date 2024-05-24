const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct, products} = require('./product');

describe('addProduct', () => {
    test('should add a product', () => {
        const product = addProduct('camiseta', '12$')
        expect(getProducts()).toContainEqual(product)
    })
    beforeEach(() => {
        resetProducts();
    });
    test('should fail when adding a repeated product', () => {
        addProduct('camiseta', '12$')
        expect(() => { addProduct('camiseta', '12$').toThrow('product already exists')})
    })
    beforeEach(() => {
        resetProducts();
    });
    test('should fail when adding a product with no name', () => {
        expect(() => { addProduct('', '12$').toThrow('name must be filled')})
    })
    beforeEach(() => {
        resetProducts();
    });
    test('should fail when adding a product with no price', () => {
        expect(() => { addProduct('camiseta', '').toThrow('price must be filled')})
    })
})

describe('removeProduct', () => {
    test('should remove a product', () => {
        addProduct('camiseta', '12$')
        removeProduct(0)
        expect(getProducts()).toHaveLength(0)
    })
    beforeEach(() => {
        resetProducts();
    });
    test('should throw an error if product dont exist', () => {
        expect(() => { removeProduct(1).toThrow('product dont exist')})
    })
})

describe('getProduct', () => {
    test('should get a product', () => {
        const addedProduct = addProduct('camiseta', '12$')
        const product = getProduct(addedProduct.id)
        expect(product).toEqual({id: 0, name: 'camiseta', price: '12$'})
    })
    beforeEach(() => {
        resetProducts();
    });
    test('should throw an error if product dont exist', () => {
        expect(() => { getProduct(1).toThrow('product dont exist')})
    })
})

describe('updateProduct', () => {
    test('should update a product', () => {
        addProduct('camiseta', '12$')
        const updatedProduct = updateProduct(0, 'sudadera', '21$')
        expect(getProducts()).toContainEqual(updatedProduct)
    })
    beforeEach(() => {
        resetProducts();
    });
    test('should throw an error if product dont exist', () => {
        expect(() => { updateProduct(1, 'sudadera', '21$').toThrow('product dont exist')})
    })
    beforeEach(() => {
        resetProducts();
    });
    test('should only update the price', () => {
        addProduct('camiseta', '12$')
        expect(() => { updateProduct(0, 'camiseta', '22$')})
    })
    beforeEach(() => {
        resetProducts();
    });
    test('should only update the name', () => {
        addProduct('camiseta', '12$')
        expect(() => { updateProduct(0, 'abrigo', '12$')})
    })
})