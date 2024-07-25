'use strict';

exports.__esModule = true;

var _isSymbol2 = require('lodash/isSymbol');

var _isSymbol3 = _interopRequireDefault(_isSymbol2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

exports.isFSA = isFSA;
exports.isError = isError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFSA(action) {
  return (0, _isPlainObject3.default)(action) && ((0, _isString3.default)(action.type) || (0, _isSymbol3.default)(action.type)) && Object.keys(action).every(isValidKey);
}

function isError(action) {
  return action.error === true;
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}