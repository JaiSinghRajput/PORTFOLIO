import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true
    },
    Price: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    timeline: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    Features: {
        type: [String],
        required: true
    }
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
