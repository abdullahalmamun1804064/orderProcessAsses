const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('Comment', commentSchema);