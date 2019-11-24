'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

    title:{
        type: String,
        maxlength: 50,
        required: true,
        trim: true
    },

    body:{
        type:String,
        maxlength:250,
        minlength:5,
        required: true,
        trim: true 
    },

    posted:{
        type:Date,
        default: Date.now()
    },

    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;