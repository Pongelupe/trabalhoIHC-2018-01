"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DebitsView = function () {
    function DebitsView(target) {
        _classCallCheck(this, DebitsView);

        this._target = target;
    }

    _createClass(DebitsView, [{
        key: "_build",
        value: function _build(model) {
            return model.debits > 0 ? "<span class=\"text-success\">" + model.debits + "</span>" : "<span class=\"text-danger\">" + model.debits + "</span>";
        }
    }, {
        key: "update",
        value: function update(model) {
            this._target.innerHTML = this._build(model);
        }
    }]);

    return DebitsView;
}();
//# sourceMappingURL=DebitsView.js.map