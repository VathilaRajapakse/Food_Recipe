const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    recipe_id:{
        type:Number,
        required:true
    },
    recipe_name:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },  
});

module.exports = mongoose.model('Recipes',postSchema)