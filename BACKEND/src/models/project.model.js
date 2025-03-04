const mongoose = require('mongoose')

const porjectShema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'project name is required'],
    },
    code: {
        type: String,
        require: [true, 'code is required'],
        default: ''
    }
})

const projectModel = mongoose.model('projects', porjectShema)

module.exports = projectModel