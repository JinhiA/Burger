const express = require('express');

const router = express.Router();

const burger = require("../models/burger.js");

// get route 
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// data posted will create a new burger
router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

// burger will be devoured by id
router.put("/:id", function (req, res) {
    const id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;