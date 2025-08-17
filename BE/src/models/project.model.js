import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    detailedDescription: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    repositoryLink: {
        type: String,
        required: true
    },
    liveLink: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false  
    },
});


const Project = mongoose.model("Project", projectSchema);
export default Project;