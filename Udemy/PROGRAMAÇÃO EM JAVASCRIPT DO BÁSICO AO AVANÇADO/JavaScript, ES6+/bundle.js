"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//Conhecendo e utilizando o Babel
var Pessoa = /*#__PURE__*/function () {
  function Pessoa() {
    _classCallCheck(this, Pessoa);
  }

  _createClass(Pessoa, [{
    key: "falar",
    value: function falar() {
      console.log('Speaking');
    }
  }, {
    key: "comer",
    value: function comer() {
      console.log('Ui');
    }
  }]);

  return Pessoa;
}();
