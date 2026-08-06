const express = require("express");
const router = express.Router();
const { verifyAdminCode } = require("../controllers/admin.controller");

router.post("/verify", verifyAdminCode);

module.exports = router;