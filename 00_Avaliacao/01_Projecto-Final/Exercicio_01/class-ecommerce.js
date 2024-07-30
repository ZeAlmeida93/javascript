const product01 = { id: 1, name: 'Leather boots', price: 100 };
const product02 = { id: 2, name: 'Knitted Sweater', price: 200 };
const product03 = { id: 3, name: 'Merino Wool Scarf', price: 300 };

// Product 

class Ecommerce {
    constructor() {
        this.products = [];
        this.cart = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    setProductPrice(productId, price) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.price = price;
        }
    }

    getAllProducts() {
        return this.products;
    }

    getAllProductsNames() {
        return this.products.map(p => p.name).join('; ');
    }

    getProductById(productId) {
        return this.products.find(p => p.id === productId);
    }

    getProductByName(productName) {
        return this.products.find(p => p.name === productName);
    }

    getProductsByPrice(initialPrice, finalPrice) {
        return this.products.filter(p => p.price >= initialPrice && p.price <= finalPrice);
    }

    addProductToCart(product) {
        this.cart.push(product);
    }

    getCart() {
        return this.cart;
    }

    getCartTotalPrice() {
        return this.cart.reduce((total, product) => total + product.price, 0);
    }
}


const ecommerce = new Ecommerce()

ecommerce.addProduct(product01)
ecommerce.addProduct(product02)
ecommerce.addProduct(product03)

console.log(ecommerce.getAllProducts())

console.log(ecommerce.getProductById(3))

console.log(ecommerce.getProductsByPrice(200,400))


addProductToCart(ecommerce.product02);
console.log(getCart())



const id = parseInt(document.getElementById("product-id").value);
const name = document.getElementById("product-name").value;
const price = parseFloat(document.getElementById("product-price").value);