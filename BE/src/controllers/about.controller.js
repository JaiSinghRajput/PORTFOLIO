import { asyncHandler, ApiError, ApiResponse } from "../utils/index.js";
import About from "../models/about.model.js"
const addAbout = asyncHandler(async (req, res) => {
    const existingAAbout = await About.findOne();
    if (existingAAbout) {
        return res.status(405).json(new ApiError(405, "About section already exists"));
    }
    const newAbout = await About.create(req.body);
    res.status(201).json(new ApiResponse(201, "About section created successfully", newAbout));
})
const updateAbout = asyncHandler(async (req, res) => {
    const existingAbout = await About.findOne();
    if (!existingAbout) {
        return res.status(404).json(new ApiError(404, "About section not found"));
    }
    Object.assign(existingAbout, req.body);
    await existingAbout.save();
    res.status(200).json(new ApiResponse(200, "About section updated successfully", existingAbout));
})
const getAbout = asyncHandler(async (req, res) => {
    const about = await About.findOne();
    if (!about) {
        return res.status(404).json(new ApiError(404, "About section not found",));
    }
    res.status(200).json(new ApiResponse(200, "About section retrieved successfully", about));
})
export { addAbout, updateAbout, getAbout };