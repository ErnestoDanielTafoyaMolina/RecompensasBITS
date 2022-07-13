"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var router = (0, _express.Router)();
router.get('/products', _products.getProducts); // obtiene todos los productos

router.get("/products/:id", _products.getProductById); // obtiene un solo producto por el id

router.post("/products", _products.createNewProduct); // crea un nuevo producto

router["delete"]("/products/:id", _products.deleteProductById); // elimina el producto por el id

router.put("/products/:id", _products.updateProductById); // actualiza un producto por su id

var _default = router;
exports["default"] = _default;