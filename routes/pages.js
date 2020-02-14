const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

//Retrieve all pages
router.get('/',async(req,res)=>{
    try{
        const pages = await Page.find();
        res.json(pages);
    }
    catch(err){
        res.json({message:err});
    }
});

//Retrieve a specific page
router.get('/:pageId',async (req,res)=>{
    try{
        const page = await Page.findById(req.params.pageId);
        res.json(page);
    }
    catch(err){
        res.json({message:err})
    }
})

//Upload a page
router.post('/', async (req,res)=>{
    const page = new Page({
        title:req.body.title,
        description:req.body.description,
        content: req.body.content,
        images:req.body.images
    });
    try {
        const savedPage = await page.save();
        res.json(savedPage);
    }
    catch(err){
        res.json({message:err});
    }
});

//Update a page
router.patch('/:pageId', async(req,res)=>{
    try{
        const updatedPage = await Page.updateOne(
            {_id:req.params.pageId},
            {$set: {title: req.body.title}});
            res.json(updatedPage);
    }
    catch(err){
        ({message:err})
    }
});

//Delete a page
router.delete('/:pageId', async(req,res)=>{
    try{
        const removedPage = await Page.deleteOne({_id:req.params.pageId});
        res.json(removedPage);
    }
    catch(err){
        res.json({message:err});
    }
})
module.exports = router;