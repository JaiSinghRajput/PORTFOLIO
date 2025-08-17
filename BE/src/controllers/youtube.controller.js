import Youtube from '../models/youtube.model.js';
import { asyncHandler, ApiError, ApiResponse } from '../utils/index.js';
// Public
export const getPublishedVideos = asyncHandler(async (req, res) => {
    try {
        const videos = await Youtube.find({ isPublished: true });
        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Admin
export const getAllVideos = asyncHandler(async (req, res) => {
    try {
        const videos = await Youtube.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export const getVideoBySlug = asyncHandler(async (req, res) => {
    try {
        const video = await Youtube.findOne({ slug: req.params.slug });
        if (!video) return res.status(404).json({ error: "Video not found" });
        res.json(video);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export const createVideo = asyncHandler(async (req, res) => {
    try {
        const newVideo = new Youtube(req.body);
        await newVideo.save();
        res.status(201).json(newVideo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export const updateVideo = asyncHandler(async (req, res) => {
    try {
        const updated = await Youtube.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export const deleteVideo = asyncHandler(async (req, res) => {
    try {
        await Youtube.findOneAndDelete({ slug: req.params.slug });
        res.json({ message: 'Video deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
export const toggleVideoPublish = asyncHandler(async (req, res) => {
    try {
        const video = await Youtube.findOne({ slug: req.params.slug });
        if (!video) return res.status(404).json({ error: "Video not found" });

        video.isPublished = !video.isPublished;
        await video.save();
        res.json(video);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});