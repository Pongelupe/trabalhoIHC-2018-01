'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IdGenerator = function () {
    function IdGenerator() {
        _classCallCheck(this, IdGenerator);
    }

    _createClass(IdGenerator, null, [{
        key: 'createNewId',
        value: function createNewId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }
    }]);

    return IdGenerator;
}();
//# sourceMappingURL=IdGenerator.js.map