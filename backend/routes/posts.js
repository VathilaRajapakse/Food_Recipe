const express = require('express');
const posts = require('../models/posts');
const Recipes = require('../models/posts');

const router = express.Router();

//save recipe
router.post('/post/save',(req,res) =>{

    let newPost = new posts(req.body);

    newPost.save((err)=> {
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Recipe saved Successfully"
        });
    });
});


//get recipe
router.get('/posts',(req,res) =>{
    posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get specific recipe
router.get("/post/:id",(req,res) =>{

    let postId = req.params.id;

    posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});

        }

        return res.status(200).json({
            success:true,
            post
        });
    });
}) ;

//update recipe
router.put('/post/update/:id',(req,res) =>{
    posts.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Recipe Update successfully"
            });
        }
    );
});

//delete recipe
router.delete('/post/delete/:id',(req,res) =>{
    posts.findByIdAndRemove(req.params.id).exec((err,deletePost)=>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfully",err
        });

        return res.json({
            message:"Delete successfull",deletePost
        });
    });
});



module.exports = router;