class ProductsList {

    constructor() {
        this._products = [];
    }

    add(product) {
        this._products.push(product);
    }

    get products() {
        return [].concat(this._products);
    }

    get totalValue() {
        return this._products.reduce((sum, x) => sum + parseFloat(x.value), 0.0);
    }

    removeAll() {
        return this._products = [];
    }

}