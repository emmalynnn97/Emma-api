const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');
router.get('/', async(req,res)=>{
    try{
        const menus = await Menu.find();
        res.json(menus);
    }
    catch(err){
        res.json({message:err})
    }
})
router.post('/', async(req,res)=>{
    const menu = new Menu({
        name:req.body.name,
        link:req.body.link
    });
    try{
        const savedMenu = await menu.save();
        res.json(savedMenu); 
    }
    catch(err){
        res.json({message:err})
    }
})
module.exports=router;
