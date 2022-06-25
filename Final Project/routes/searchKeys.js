const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addSearchKey,
  updateSearchKey,
  deleteSearchKey,
  getSearchKeys
} = require("../controllers/searchKeys");

// @route   POST /sizes
// @desc    Create new size
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addSearchKey
);

// @route   PUT /sizes/:id
// @desc    Update existing size
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  updateSearchKey
);

// @route   DELETE /sizes/:id
// @desc    DELETE existing size
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  deleteSearchKey
);

// @route   GET /sizes
// @desc    GET existing sizes
// @access  Public
router.get("/", getSearchKeys);

module.exports = router;
