'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductsView = function () {
    function ProductsView(target) {
        _classCallCheck(this, ProductsView);

        this._target = target;
    }

    _createClass(ProductsView, [{
        key: '_build',
        value: function _build(model) {
            var _this = this;

            var products = model.products;
            return products.length == 0 ? '\n      <div class="alert alert-warning">\n        <strong>Aten\xE7\xE3o!</strong> Sua lista de produtos est\xE1 vazia!<br/>\n        Adicione novos produtos preenchendo os campos acima e depois clicando em Adicionar novo produto.\n      </div>\n        ' : '\n        <table class="table table-hover table-bordered">\n        \n        <thead>\n            <tr>\n                <th>Nome</th>\n                <th>Categoria</th>\n                <th>Valor</th>\n            </tr>\n        </thead>\n    \n        <tbody>\n            ' + products.map(function (product) {
                return '\n\n                <tr>\n                    <td>' + product.name + '</td>\n                    <td>\n                        ' + product.category + '\n                        ' + _this._defineIcon(product.category) + '\n                    </td>\n                    <td>\n                            R$ ' + product.value + '\n                            <i class="far fa-trash-alt" onclick=\'supermarketController.deleteProduct("' + product.id + '")\'></i>\n                    </td>\n                </tr>\n                \n            ';
            }).join('') + '                \n        </tbody>\n              \n        <tfoot>\n            <td colspan="2">Total \xE0 pagar</td>\n            <td>\n                R$ ' + model.totalValue + '\n            </td>\n        </tfoot>\n        \n    </table>\n        ';
        }
    }, {
        key: '_defineIcon',
        value: function _defineIcon(category) {
            switch (category) {
                case 'Alimentação':
                    return '<i class="fas fa-glass-martini" data-placement="right" data-toggle="tooltip" title="' + category + '"></i>';
                    break;
                case 'Papelaria':
                    return '<i class="far fa-sticky-note" data-placement="right" data-toggle="tooltip" title="' + category + '"></i>';
                    break;
                case 'Higiênie Pessoal':
                    return '<i class="fas fa-shower" data-placement="right" data-toggle="tooltip" title="' + category + '"></i>';
                    break;
            }
        }
    }, {
        key: 'update',
        value: function update(model) {
            this._target.innerHTML = this._build(model);
        }
    }]);

    return ProductsView;
}();
//# sourceMappingURL=ProductsView.js.map