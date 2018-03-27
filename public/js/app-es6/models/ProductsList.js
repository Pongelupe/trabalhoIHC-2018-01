class ProductsList {

    constructor() {
        this._products = [];
        this._initCrazyProducts();
    }

    add(product) {
        this._products.push(product);
    }

    remove(idProduct) {
        return this._products.pop(this._findById(idProduct));
    }

    _findById(idProduct) {
        return this._products.filter(product => product.id == idProduct)[0];
    }

    _initCrazyProducts() {
        this._crazyProducts = [
            new Product(15.75, "Melância Quadrada Japonesa", "Alimentação"), new Product(69.69, 'Cubo Mágico de campeonato', 'Papelaria'),
            new Product(1.50, "Bala de Caramelo", "Alimentação"), new Product(4.99, "Patinho de Borracha", "Higiênie Pessoal"),
            new Product(14.00, "Shampoo Lustra Careca", "Higiênie Pessoal"), new Product(7.99, "Post-it Colorido", "Papelaria"),
            new Product(39.12, "Pasta de Dente Comestível", "Higiênie Pessoal"), new Product(9.99, "Estojo Piratas do Caribe", "Papelaria"),
            new Product(4.99, "Doce de Leite de Vacas Holandesas", "Alimentação"), new Product(1.99, "Rótulo de Creme", "Higiênie Pessoal"),
            new Product(39.99, "Livro - Sociedade do Anel", "Papelaria"), new Product(4.99, "Queijo Brie", "Alimentação")
        ];
    }

    get products() {
        return [].concat(this._products);
    }

    get totalValue() {
        let total = this._products.reduce((sum, x) => sum + parseFloat(x.value), 0.0);
        return parseFloat(Math.round(total * 100) / 100).toFixed(2);
    }

    get length() {
        return this._products.length;
    }

    sugestNew() {
        if (this._crazyProducts.length == 0)
            this._initCrazyProducts
        let position = Math.floor((Math.random() * this._crazyProducts.length) + 0);
        if (position > this._crazyProducts.length - 1)
            position -= this._crazyProducts.length - 1;

        return this._crazyProducts.splice(position, 1)[0];
    }

    removeAll() {
        return this._products = [];
    }

}