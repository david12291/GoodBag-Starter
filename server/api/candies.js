const Candy = require('../db/models/Candy')
const router = require('express').Router()

//set up candy model
//set candies router
//have get => /api/candies send all candies 
//this handle a 'get' => /api/candies
router.get('/', async (req,res,next)=> {
    try{ 
        const candies = await Candy.findAll()
        res.send(candies)
    } catch (e) {
        next(e)
    }

})
// one candy this handle a 'get' => /api/candies/2
router.get('/:id', async (req,res,next)=> {
    try{ 
        const candies = await Candy.findByPk(req.params.id)
        res.send(candies)
    } catch (e) {
        next(e)
    }

})
//create CANDY this handle a "post" => /api/candies

router.post('/', async (req,res,next)=> {
    try{ 
        const candy = await Candy.create(req.body)
        res.send(candy)
    } catch (e) {
        next(e)
    }

})

router.put('/:id/increment', async (req,res,next)=> {
    try{ 
        const candy = await Candy.findByPk(req.params.id)
        candy.update(req.body)
        res.send(`put hit edit here increment: you sent ${req.params.id}`)
    } catch (e) {
        next(e)
    }

})


router.delete('/:id', async (req,res,next)=> {
    try{ 
        const candy = await Candy.findByPk(req.params.id)
        candy.destroy()
        res.send(candy)
    } catch (e) {
        next(e)
    }

})



module.exports = router