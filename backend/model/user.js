'use strict'

const mongoose = require('mongoose');
const uuid = require('uuid')
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

    personalId: {
        type: String,
        default: uuid.v4()

    },

    date: {
        type: Date,
        default: Date.now()
    },

    role: {
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