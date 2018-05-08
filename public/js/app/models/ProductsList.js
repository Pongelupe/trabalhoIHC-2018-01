"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductsList = function () {
    function ProductsList() {
        _classCallCheck(this, ProductsList);

        this._products = [];
        this._initCrazyProducts();
    }

    _createClass(ProductsList, [{
        key: "add",
        value: function add(product) {
            this._products.push(product);
        }
    }, {
        key: "remove",
        value: function remove(idProduct) {
            return this._products.pop(this._findById(idProduct));
        }
    }, {
        key: "_findById",
        value: function _findById(idProduct) {
            return this._products.filter(function (product) {
                return product.id == idProduct;
            })[0];
        }
    }, {
        key: "_initCrazyProducts",
        value: function _initCrazyProducts() {
            this._crazyProducts = [new Product(15.75, "Melância Quadrada Japonesa", "Alimentação"), new Product(69.69, 'Cubo Mágico de campeonato', 'Papelaria'), new Product(1.50, "Bala de Caramelo", "Alimentação"), new Product(4.99, "Patinho de Borracha", "Higiênie Pessoal"), new Product(14.00, "Shampoo Lustra Careca", "Higiênie Pessoal"), new Product(7.99, "Post-it Colorido", "Papelaria"), new Product(39.12, "Pasta de Dente Comestível", "Higiênie Pessoal"), new Product(9.99, "Estojo Piratas do Caribe", "Papelaria"), new Product(4.99, "Doce de Leite de Vacas Holandesas", "Alimentação"), new Product(1.99, "Rótulo de Creme", "Higiênie Pessoal"), new Product(39.99, "Livro - Sociedade do Anel", "Papelaria"), new Product(4.99, "Queijo Brie", "Alimentação")];
        }
    }, {
        key: "sugestNew",
        value: function sugestNew() {
            if (this._crazyProducts.length == 0) this._initCrazyProducts;
            var position = Math.floor(Math.random() * this._crazyProducts.length + 0);
            if (position > this._crazyProducts.length - 1) position -= this._crazyProducts.length - 1;

            return this._crazyProducts.splice(position, 1)[0];
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            return this._products = [];
        }
    }, {
        key: "products",
        get: function get() {
            return [].concat(this._products);
        }
    }, {
        key: "totalValue",
        get: function get() {
            var total = this._products.reduce(function (sum, x) {
                return sum + parseFloat(x.value);
            }, 0.0);
            return parseFloat(Math.round(total * 100) / 100).toFixed(2);
        }
    }, {
        key: "length",
        get: function get() {
            return this._products.length;
        }
    }]);

    return ProductsList;
}();
//# sourceMappingURL=ProductsList.js.map