import mongoose from "mongoose";

const youtubeSchema = new mongoose.Schema({
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
    videoUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: ['short', 'long'],
        required: true
    },
    channelName: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String],
        required: true
    }
},{
    timestamps: true
});

const Youtube = mongoose.model("Youtube", youtubeSchema);

export default Youtube;
