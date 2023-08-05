const express = require('express');
const router = express.Router();

const {createtask,gettask,updaten,deletetask} = require('../controler/control');

router.post("/",createtask);
router.get("/",gettask);
router.patch("/:id",updaten);
router.delete("/:id",deletetask)

module.exports = router;