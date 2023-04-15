const bookControllers = require("../controllers/book");
const express = require("express");
const router = express.Router();

router.post("/car", bookControllers.bookCar);

module.exports = router;
