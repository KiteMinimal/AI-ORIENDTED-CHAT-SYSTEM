const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/AI_PROJECT')
    .then(() => {
        console.log('server connected to MONGODB')
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = connect