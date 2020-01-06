const express = require("express"),
router = express.Router(),
ClosetModel = require("../models/closetModel");

router.get("/", async function(req, res, next) {

    const imageData = await ClosetModel.getAll();
    res.send(imageData).status(200);
    
});
router.get("/hot", async function(req,res, next) {

    const hotData = await ClosetModel.getHot();
    res.send(hotData).status(200);

});
router.get("/warm", async function(req,res, next) {

    const warmData = await ClosetModel.getWarm();
    res.send(warmData).status(200);

});
router.get("/cool", async function(req,res, next) {

    const coolData = await ClosetModel.getCool();
    res.send(coolData).status(200);

});
router.get("/cold", async function(req,res, next) {

    const coldData = await ClosetModel.getCold();
    res.send(coldData).status(200);

});
router.get("/freezing", async function(req,res, next) {

    const freezingData = await ClosetModel.getFreezing();
    res.send(freezingData).status(200);

});

module.exports = router;