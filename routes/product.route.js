// routes/product.route.js

const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");


router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
const { body } = require("express-validator");

router.post(
  "/",
  [
    body("name")
      .not()
      .isEmpty()
      .withMessage("Product name is required")
      .isLength({ min: 3 })
      .withMessage("Product name must be at least 3 characters long"),
    body("price")
      .isNumeric()
      .withMessage("Price must be a valid number")
      .isFloat({ min: 0 })
      .withMessage("Price must be a positive number"),
    body("description")
      .optional()
      .isLength({ max: 500 })
      .withMessage("Description cannot exceed 500 characters")
  ],
  createProduct
);
router.put(
  "/:id",
  [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("Product name must be at least 3 characters long"),
    body("price")
      .optional()
      .isNumeric()
      .withMessage("Price must be a valid number")
      .isFloat({ min: 0 })
      .withMessage("Price must be a positive number"),
    body("description")
      .optional()
      .isLength({ max: 500 })
      .withMessage("Description cannot exceed 500 characters")
  ],
  updateProduct
);
