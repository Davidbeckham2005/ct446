const express = require("express");
const contacts = require("../controllers/contactcontroller");

const router = express.Router();

router.route("/")
    .get(contacts.findALL)
    .post(contacts.create)
    .delete(contacts.deleteALL);

router.route("/favorite")
    .get(contacts.findaallfavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);


module.exports = router;