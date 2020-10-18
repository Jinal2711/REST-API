const express = require('express');
const router = express.Router();
const Category = require('../models/Categories');

router.get('/',async (req,res) => {
    const { page, perPage } = req.query;
    const options = {
        page: parseInt(page, 10) | 1,
        limit: parseInt(perPage, 10) | 12,
    }
    try{
        const category = await Category.paginate({}, options);
        res.json(category)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/', async (req,res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description,
    })
    try{
        const saveCategory = await category.save()
        res.json(saveCategory);
    }
    catch(err) {
        res.json({message: err})
    }
})

router.get('/:id', async(req,res) => {
    try{
        const category = await Category.findById(req.params.id);
        res.json(category);
    }catch (err) {
        res.json({message : err})
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const category = await Category.remove({_id: req.params.id})
        res.json(category)
    } catch (err) {
        res.json({message: err})
    }
})

router.patch('/:id', async(req,res) => {
    try {
        const category = await Category.updateOne({_id: req.params.id},
            { $set: {
                name: req.body.name,
                description: req.body.description
            }
        })
        res.json(category)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;