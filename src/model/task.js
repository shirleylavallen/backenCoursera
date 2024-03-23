module.exports = function () {
    const mongoose = require('../libs/db');

    var Task = new mongoose.Schema({
        title: String,
        description: String,
        status: Boolean
    });

    return mongoose.model('tasks', Task); 
}