const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const fs = require('fs');
const multer = require('multer');
var path = require('path'); 

const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, path.join(process.cwd(), 'images')) 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + "-" + Date.now());
    } 
}); 

var upload = multer({ storage: storage });

router.post("/upload", upload.single('img'), (req, res) => {
    console.log(req.file)
    if (!req.file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        throw error
      }
      res.json(req.file)
})

// GETS ALL THE POST    
router.get('/', async (req,res) => {
    const { page, perPage } = req.query;
    const options = {
        page: parseInt(page, 10) | 1,
        limit: parseInt(perPage, 10) | 12,
    }
    try{
        const product = await Product.paginate({}, options);
        res.json(product);
    }
    catch(err){
        res.json({message: err})
    }
})
// SUBMIT A POST

router.post('/', async (req,res) => {
   const product = new Product({
       name: req.body.name,
       price : {
        sale_price: req.body.price.sale_price,
        list_price: req.body.price.list_price,
       },
       isAvailable: req.body.isAvailable,
       img:  req.body.img,
       categoryBy: req.body.categoryBy
   })
   try{
       const savedPost = await product.save();
       savedPost.populate('categoryBy');
       res.json({
        savedPost,
        msg: 'Data posted successfully',
        status: 'OK'
      });
   }
   catch(err){
       res.json({ message: err })
   }
})

// Specific post 
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
       res.json(product);
   } catch (err) {
       res.json({message:err})
   }
})

//Delete specific post

router.delete('/:id', async(req, res) => {
    try {
        const product = await Product.remove({_id: req.params.id})
        res.json(product);
    } catch (err) {
        res.json({message:err})
    }
})

//update specific post 

router.patch('/:id', async(req, res) => {
    try {
       
        const product = await Product.updateOne(
            {_id: req.params.id},
            { $set: 
                {
                    name: req.body.name,
                    price : {
                        sale_price: req.body.price.sale_price,
                        list_price: req.body.price.list_price,
                       },
                    isAvailable: req.body.isAvailable,
                    img: req.body.file,
                }
            })
        res.json(product);
    } catch (err) {
        res.json({message:err})
    }
})
module.exports = router;
