const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('all dogs')

})
router.get('/:id/edit', (req,res)=>{
    res.send('Editing one dog')
})

router.get('/:id', (req,res)=>{
    res.send('one dog')
})
router.post('/', (req,res)=>{
    res.send('New dog')
})

module.exports = router;