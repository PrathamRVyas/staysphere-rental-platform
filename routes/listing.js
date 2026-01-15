const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/wrapAsync.js");
const Listing = require("../Models/listings.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js")

const listingController = require("../controllers/listings.js");

const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });



//Index and Create
router.route("/")
.get(asyncWrap(listingController.index))

.post(
  isLoggedIn, 
  upload.single('listing[image]'),
  validateListing,
  asyncWrap(listingController.createListing)
);




//New

router.get("/new", isLoggedIn, listingController.renderNewForm);



//Show, Update & Delete
router.route("/:id")
.get(asyncWrap(listingController.showListing))

.put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, asyncWrap(listingController.updateListing))

.delete(isLoggedIn, isOwner, asyncWrap(listingController.destroyListing));



//Edit

router.get("/:id/edit", isLoggedIn, isOwner, asyncWrap(listingController.rendereditForm));


module.exports = router;