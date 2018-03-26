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
        let total = this._products.reduce((sum, x) => sum + parseFloat(x.value), 0.0);
        return parseFloat(Math.round(total * 100) / 100).toFixed(2);
    }

    removeAll() {
        return this._products = [];
    }

}