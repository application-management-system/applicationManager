const express = require('express');
const router = express.Router();

/* INDEX - show all forms */
router.get("/", (req, res) => res.render("form/index"));

/* CREATE - create form in DB */
router.post("/", (req, res) => {
  console.log(req.body);

  res.redirect("/form");
});

/* NEW - show form to create admin form */
router.get("/new", (req, res) => res.render("form/new"));

module.exports = router;
