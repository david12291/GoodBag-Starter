const Candy = require('../db/models/Candy')
const router = require('express').Router()


//this handle a 'get' => /api/candies
router.get('/',(req,res,next)=> {
    res.send('get to /candies made here is response')
})
module.exports = router