const express = require("express");
const router = express.Router();

const {
  createCustomer,getAllCustomers
} = require("../controllers/customer.controller");



router.get("/", getAllCustomers);

router.post("/", createCustomer);

module.exports = router;