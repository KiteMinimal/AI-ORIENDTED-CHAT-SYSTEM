const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://localhost:3000/AI_PROJECT')
    .then(() => {
        console.log('server connected to MONGODB')
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = connect