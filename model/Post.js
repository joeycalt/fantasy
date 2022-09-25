const mongoose = require('mongoose')
// const Schema = mongoose.Schema

const postSchema = new mongoose.Schema (
    {
        week: [{
            type: String
        }],
        content: [{
            type: String
        }]
    },
    {timestamps: true}
);

const Blog = mongoose.model('Blog', postSchema);

module.exports = Blog;