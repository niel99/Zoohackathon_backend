var express = require("express");
var router = express.Router();
var faunaController = require('../controllers/faunaController');

router.post('/fetch', faunaController.getKeywords);

module.exports = router;