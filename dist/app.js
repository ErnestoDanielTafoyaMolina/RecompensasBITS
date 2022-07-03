"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _payroll = _interopRequireDefault(require("./routes/payroll.routes"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//dependences
//import routes 
var app = (0, _express["default"])(); //settings

app.set('port', _config["default"].port); //Middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json()); //routes

app.use("/api", _users["default"]);
app.use("/api", _payroll["default"]);
app.use("/api", _products["default"]);
var _default = app;
exports["default"] = _default;