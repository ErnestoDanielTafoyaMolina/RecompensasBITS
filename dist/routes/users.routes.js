"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../controllers/users.controller");

var router = (0, _express.Router)();
router.get('/users', _users.getUsers);
router.get('/users/:id', _users.getUserById);
var _default = router;
exports["default"] = _default;