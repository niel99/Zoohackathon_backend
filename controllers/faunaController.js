var faunaModel = require("../models/faunaModel");
exports.getKeywords = async (req, res) => {
    console.log("body is", req.body);
    var resp = await faunaModel.getKeywords(req.body.tag);
    res.send(resp);
};
