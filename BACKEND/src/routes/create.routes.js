const express = require('express')
const { createPorject, listAllPorject } = require('../controller/project.controller')
const router = express.Router()


router.post('/create',createPorject)

router.get('/list', listAllPorject)




module.exports = router