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
    burger.insertOne(req.body.burger_name, function (result) {
        res.json({id:result.insertId});
    });
});

// burger will be devoured by id
router.put("/api/burgers/:id", function (req, res) {
    const id = req.params.id;

    burger.updateOne(id, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;