var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PositionSchema = new mongoose.Schema({
    search_keyword : String,
    company_short : String,
    finance_stage : String,
    company_size : String,
    position_type : String,
    position_id : String,
    position_name : String,
    city : String,
    advantage : String,
    work_year : String,
    industry : String,
    salary : String,
    education : String,
    company_id : String,
    company : String,

    createAt: Date,
    updateAt: Date
}, {collection: 'position'});


PositionSchema.pre('save', function(next) {
    if (this.isNew){
        this.createAt = this.updateAt = Date.now();
    }else{
        this.updateAt = Date.now();
    }
    next();
});


module.exports = mongoose.model('position', PositionSchema);