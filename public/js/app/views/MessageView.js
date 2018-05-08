'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageView = function () {
    function MessageView(target) {
        _classCallCheck(this, MessageView);

        this._target = target;
    }

    _createClass(MessageView, [{
        key: '_build',
        value: function _build(model) {
            return model.content ? '<p class="alert alert-' + model.type + '">' + model.content + '</p>' : '<p></p>';
        }
    }, {
        key: 'update',
        value: function update(model) {
            this._target.innerHTML = this._build(model);
        }
    }]);

    return MessageView;
}();
//# sourceMappingURL=MessageView.js.map