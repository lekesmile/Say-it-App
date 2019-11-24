'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
        type: String,
        min: 3,
        unique: true
    },

    password: {
        type: String,
        trim: true,

    },

    date: {
        type: Date,
        default: Date.now()
    },

    role:
    {
        admin: {
            type: String,
            default: false
        },

        user: {
            type: String,
            default: true
        }
    }



})

const User = mongoose.model('user', userSchema);
module.exports = User;