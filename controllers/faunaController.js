var faunaModel = require("../models/faunaModel");
exports.getKeywords = async (req, res) => {
    console.log("body is", req.body);
    faunaModel.getKeywords(req.body.tag, function(data) {
        console.log(data);
        var keywords = [];
        data.forEach((elment) => {
            elment.Keywords.forEach((eachKeywords) => {
                keywords.push(eachKeywords);
            });
        });
        let uniqueKeywords = [...new Set(keywords)];
        res.send({keywords: uniqueKeywords});
    });
};

exports.findByKeywords = (req, res) => {
    console.log('body is', req.body);
    let tag = req.body.tag;
    let keywords = req.body.keywords;
    faunaModel.findByKeywords(tag, keywords, function(data){
        res.send({objects: data});
    });
}
