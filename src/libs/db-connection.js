const mongoose = require('mongoose');

let db;

module.exports = function(){
    if(!db) {
        db = mongoose.connect('mongodb://127.0.0.1:27017/crud-example')
        .catch(error => console.log(error));
    }
    return db;
}