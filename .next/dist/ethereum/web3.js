'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {

  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new _web2.default(window.ethereum);
} else {

  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/3e62532167e1432e96f4dc3b31ba8122");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsYUFBMkIsQUFBaEUsYUFBNkUsQUFFM0U7O1NBQU8sQUFBUCxTQUFnQixBQUFoQixRQUF3QixFQUFDLFFBQVMsQUFBVixBQUF4QixBQUNBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBaEIsQUFBUCxBQUNEO0FBSkQsT0FJTyxBQUVMOztNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBakIsQUFHQTtTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDRDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhcmlhbnRhYmFuL0RvY3VtZW50cy9zY3JhdGNoV29yay9wcm9qZWN0cy9raWNrc3RhcnQifQ==