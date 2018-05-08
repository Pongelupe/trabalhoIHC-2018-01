"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Debits = function () {
    function Debits(initialValue) {
        _classCallCheck(this, Debits);

        this._initialValue = initialValue;
        this._debits = initialValue;
    }

    _createClass(Debits, [{
        key: "addDebit",
        value: function addDebit(value) {
            this._debits -= value;
        }
    }, {
        key: "removeDebit",
        value: function removeDebit(value) {
            this._debits += value;
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            this._debits = this._initialValue;
        }
    }, {
        key: "initialValue",
        get: function get() {
            return this._initialValue;
        }
    }, {
        key: "debits",
        get: function get() {
            return parseFloat(Math.round(this._debits * 100) / 100).toFixed(2);
        }
    }]);

    return Debits;
}();
//# sourceMappingURL=Debits.js.map