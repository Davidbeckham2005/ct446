const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.router("/")
    .get(contacts.findALL)
    .post(contacts.create)
    .delete(contacts.deleteALL);

rounter.router("/favorite")
    .get(contacts.findaallfavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);


module.exports = router;