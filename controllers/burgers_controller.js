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
        res.send("created!");
    });
});

// burger will be devoured by id
router.put("/api/burgers/:id", function (req, res) {
    const id = req.params.id;

    burger.updateOne(id, function () {
        res.send("updated!");
    });
});

module.exports = router;