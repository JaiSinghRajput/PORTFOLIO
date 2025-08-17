import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isMain: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String],
        required: true
    },
},{
    timestamps: true
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
