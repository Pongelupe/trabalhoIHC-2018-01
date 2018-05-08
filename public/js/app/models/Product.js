"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function () {
    function Product(value, name, category) {
        _classCallCheck(this, Product);

        this._id = IdGenerator.createNewId();
        this._value = value;
        this._name = name;
        this._category = category;
    }

    _createClass(Product, [{
        key: "id",
        get: function get() {
            return this._id;
        }
    }, {
        key: "value",
        get: function get() {
            return parseFloat(Math.round(this._value * 100) / 100).toFixed(2);
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
    }, {
        key: "category",
        get: function get() {
            return this._category;
        }
    }]);

    return Product;
}();
//# sourceMappingURL=Product.js.map