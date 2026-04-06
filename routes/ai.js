const express = require("express");
const router = express.Router();

const aiController = require("../controllers/ai.js");

router.post("/generate-description", aiController.generateDescription);

module.exports = router;