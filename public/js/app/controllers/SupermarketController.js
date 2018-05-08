'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SupermarketController = function () {
    function SupermarketController() {
        _classCallCheck(this, SupermarketController);

        this._init();

        var $ = document.querySelector.bind(document);

        this._inputName = $('#productName');
        this._inputValue = $('#productValue');
        this._inputCategory = $('#productCategory');
        this._listProducts = new Bind(new ProductsList(), new ProductsView($('#productsView')), 'add', 'remove', 'removeAll');
        this._message = new Bind(new Message(), new MessageView($('#mesageView')), 'content');
    }

    _createClass(SupermarketController, [{
        key: '_init',
        value: function _init() {
            var _this = this;

            swal({
                closeOnEsc: false,
                closeOnClickOutside: false,
                text: "Insira o valor que será gasto nesta compra!",
                content: {
                    element: "input",
                    attributes: {
                        value: "0.00",
                        type: "Number",
                        step: "0.01"
                    }
                }
            }).then(function (value) {
                if (!value) _this._init();else {
                    _this._initialValue = value;
                    document.querySelector('#initialValue').innerHTML = value;
                    var debitsView = document.querySelector('#debits');
                    _this._debits = new Bind(new Debits(value), new DebitsView(debitsView), 'addDebit', 'removeDebit', 'removeAll');
                }
            });
        }
    }, {
        key: 'deleteProduct',
        value: function deleteProduct(idProduct) {
            var product = this._listProducts.remove(idProduct);

            this._message.type = 'success';
            this._message.content = product.name + ' removido com sucesso!';

            this._debits.removeDebit(parseFloat(product.value));
        }
    }, {
        key: 'addProduct',
        value: function addProduct(event) {
            event.preventDefault();
            var product = new Product(this._inputValue.value, this._inputName.value, this._inputCategory.value);
            this._addProduct(product);
        }
    }, {
        key: 'info',
        value: function info() {
            swal("Ooopsy Daisy!", "Não encontrou o que procurava? Nossa equipe está elaborando novos produtos =)", "info");
        }
    }, {
        key: '_addProduct',
        value: function _addProduct(product) {
            var errors = this._isProductValid(product);
            if (errors.length == 0) {

                this._listProducts.add(product);

                this._message.type = 'success';
                this._message.content = product.name + ' adicionado com sucesso!';

                this._debits.addDebit(product.value);

                this._resetForm();
                this._suggestProduct();
            } else {

                this._message.type = 'danger';
                this._message.content = 'Erro ao adicionar:<br/>\n                    ' + errors.map(function (error) {
                    return error;
                }).join('<br/>');
            }
        }
    }, {
        key: '_suggestProduct',
        value: function _suggestProduct() {
            var _this2 = this;

            if (this._listProducts.length % 3 == 0) {
                var productSugested = this._listProducts.sugestNew();
                swal({
                    closeOnClickOutside: false,
                    icon: 'warning',
                    text: 'Deseja adicionar ' + productSugested.name + ' a sua lista?\n\n                Por apenas R$ ' + productSugested.value,
                    buttons: ["Não por agora", true]
                }).then(function (value) {
                    if (value) _this2._addProduct(productSugested);
                });
            }
        }
    }, {
        key: '_isProductValid',
        value: function _isProductValid(product) {
            var validationsErrors = [];
            if (product.name == '') validationsErrors.push('O nome não pode ser vazio!');
            if (product.value <= 1.0) validationsErrors.push('O valor deve ser superior a 1,00 real!');

            return validationsErrors;
        }
    }, {
        key: 'removeAllProducts',
        value: function removeAllProducts() {
            var _this3 = this;

            swal({
                icon: 'warning',
                text: "Deseja limpar sua lista?",
                buttons: ["Cancelar", true]
            }).then(function (value) {
                if (value) {
                    _this3._listProducts.removeAll();
                    _this3._debits.removeAll();
                }
            });
        }
    }, {
        key: '_resetForm',
        value: function _resetForm() {

            this._inputName.value = '';
            this._inputValue.value = 0.0;
            this._inputCategory.value = 'Alimentação';

            this._inputName.focus();
        }
    }]);

    return SupermarketController;
}();
//# sourceMappingURL=SupermarketController.js.map