const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");
const { body } = require("express-validator");

const router = express.Router();

// User registration
router.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Please include a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
  ],
  registerUser
);

// User login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please include a valid email"),
    body("password").exists().withMessage("Password is required")
  ],
  loginUser
);

module.exports = router;
router.post(
  "/register",
  [
    body("name")
      .not()
      .isEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long"),
    body("email")
      .isEmail()
      .withMessage("Please include a valid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long")
  ],
  registerUser
);
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please include a valid email address"),
    body("password")
      .exists()
      .withMessage("Password is required")
  ],
  loginUser
);
