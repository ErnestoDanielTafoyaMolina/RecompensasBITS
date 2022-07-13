"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _payroll = require("../controllers/payroll.controllers");

var router = (0, _express.Router)();
router.get('/payroll', _payroll.getPayroll);
var _default = router;
exports["default"] = _default;