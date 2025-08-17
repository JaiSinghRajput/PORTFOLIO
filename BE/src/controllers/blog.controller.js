import Blog from "../models/blog.model.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";

// ✅ PUBLIC: Get all published blogs (with optional pagination + filter)
export const getPublishedBlogs = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, tag, isFeatured } = req.query;
    const filter = { isPublished: true };

    if (tag) filter.tags = tag;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';

    const blogs = await Blog.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(Number(limit));

    const total = await Blog.countDocuments(filter);

    res.status(200).json(new ApiResponse(200, "Published blogs fetched", {
        blogs,
        total,
        page: Number(page),
        limit: Number(limit),
    }));
});

// ✅ ADMIN: Create a new blog
export const createBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.create(req.body);
    res.status(201).json(new ApiResponse(201, "Blog created", blog));
});

// ✅ ADMIN: Get all blogs (with optional filters)
export const getAllBlogsAdmin = asyncHandler(async (req, res) => {
    const { isPublished, isFeatured, isMain, tag } = req.query;

    const filter = {};
    if (isPublished !== undefined) filter.isPublished = isPublished === "true";
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === "true";
    if (isMain !== undefined) filter.isMain = isMain === "true";
    if (tag) filter.tags = tag;

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.status(200).json(new ApiResponse(200, "All blogs fetched", blogs));
});

// ✅ ADMIN or PUBLIC: Get a blog by slug
export const getBlogBySlug = asyncHandler(async (req, res) => {
    const blog = await Blog.findOne({ slug: req.params.slug });
    console.log("slug:", req.params.slug);
    if (!blog) return res.status(404).json(new ApiError(404, "Blog not found"));
    res.status(200).json(new ApiResponse(200, "Blog fetched", blog));
});

// ✅ ADMIN: Update blog by slug
export const updateBlog = asyncHandler(async (req, res) => {
    const updated = await Blog.findOneAndUpdate({ slug: req.params.slug }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updated) throw new ApiError(404, "Blog not found");
    res.status(200).json(new ApiResponse(200, "Blog updated", updated));
});

// ✅ ADMIN: Delete blog by slug
export const deleteBlog = asyncHandler(async (req, res) => {
    const deleted = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) throw new ApiError(404, "Blog not found");
    res.status(200).json(new ApiResponse(200, "Blog deleted"));
});
