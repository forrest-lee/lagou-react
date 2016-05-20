var Position = require('../models/Position');
var Keywords = require('../models/Keywords');

exports.showAllPosition = function(req, res) {
    Position
    .find({})
    .exec((err, positions) => {
        if(err) {
            return res.json({err: 1, msg: err});
        } else {
            return res.json({
                err: 0,
                data: positions
            })
        }
    })
}


exports.showAllKeywords = function(req, res) {
    Keywords
    .find({})
    .limit(1000)
    .exec((err, keywords) => {
        if(err) {
            return res.json({err: 1, msg: err});
        } else {
            return res.json({
                err: 0,
                data: keywords
            });
        }
    })
}
