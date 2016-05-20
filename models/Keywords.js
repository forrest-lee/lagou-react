var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var KeywordSchema = new mongoose.Schema({
    word: String,
    cnt: String,
    search_keyword: String,

    createAt: Date,
    updateAt: Date
}, {collection: 'word_frequency'});


KeywordSchema.pre('save', function(next) {
    if (this.isNew){
        this.createAt = this.updateAt = Date.now();
    }else{
        this.updateAt = Date.now();
    }
    next();
});


module.exports = mongoose.model('word_frequency', KeywordSchema);
