const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = Schema({
    task: {type: String,trim: true,required: true,},
    task_desc: {type: String,trim: true,required: true,}
})

module.exports = mongoose.model('Task', TaskSchema) 