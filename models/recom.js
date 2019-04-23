const mongoose = require('mongoose');
const config = require('../config/database');

//Recommendation Schema
const RecomSchema = mongoose.Schema({
    date:{
        type:String
    },
    uname:{
        type:String,
        required:true
    },
    sector:{
        type:String,
        required:true
    },
    company: {
        type:String,
        required:true
    },
    growth: {
        type:Number,
        required:true
    },  
    close: {
        type:Number,
        required:true
    },
    high: {
        type:Number,
        required:true
    },
    low: {
        type:Number,
        required:true
    },
    
                   
});

const Recom = module.exports = mongoose.model('Recom', RecomSchema);

module.exports.addRecom = function(newRecom, callback){
    Recom.create(newRecom,callback);
}

module.exports.getRecomByUsername = function(uname , callback){
    const query = {uname:uname}
    Recom.find(query,callback);
}