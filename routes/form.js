const express = require('express');
const router = express.Router();

/* INDEX - show all forms */
router.get("/", (req, res) => res.render("form/index"));

/* NEW - show form to create admin form */
router.get("/new", (req, res) => res.render("form/new"));

module.exports = router;
