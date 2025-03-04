const express = require('express')
const { createPorject } = require('../controller/project.controller')
const router = express.Router()


router.post('/create',createPorject)




module.exports = router