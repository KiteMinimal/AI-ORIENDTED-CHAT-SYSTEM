const mongoose = require('mongoose')

const porjectShema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'project name is required'],
    },
    code: {
        type: String,
        require: [true, ''],
        default: ' '
    }
})