const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

//Retrieve all projects
router.get('/',async(req,res)=>{
    try{
        const projects = await Project.find();
        res.json(projects);
    }
    catch(err){
        res.json({message:err});
    }
});

//Retrieve a specific project
router.get('/:projectId',async (req,res)=>{
    try{
        const project = await Project.findById(req.params.projectId);
        res.json(project);
    }
    catch(err){
        res.json({message:err})
    }
})

//Upload a project
router.post('/', async (req,res)=>{
    const project = new Project({
        title:req.body.title,
        description:req.body.description,
        link: req.body.link,
        imageLink: req.body.imageLink,
        type:req.body.type
    });
    try {
        const savedProject = await project.save();
        res.json(savedProject);
    }
    catch(err){
        res.json({message:err});
    }
});

//Update a project
router.patch('/:projectId', async(req,res)=>{
    try{
        const updatedProject = await Project.updateOne(
            {_id:req.params.projectId},
            {$set: {title: req.body.title}});
            res.json(updatedProject);
    }
    catch(err){
        ({message:err})
    }
});

//Delete a project
router.delete('/:projectId', async(req,res)=>{
    try{
        const removedProject = await Project.deleteOne({_id:req.params.projectId});
        res.json(removedProject);
    }
    catch(err){
        res.json({message:err});
    }
})
module.exports = router;