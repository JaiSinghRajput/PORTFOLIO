import Project from "../models/project.model.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";

// CREATE
export const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(new ApiResponse(201, "Project created", project));
});

// READ (All)
export const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(new ApiResponse(200, "Projects fetched", projects));
});

// READ (By Slug)
export const getProjectBySlug = asyncHandler(async (req, res) => {
  const project = await Project.findOne({ slug: req.params.slug });
  if (!project) return res.status(404).json(new ApiError(404, "Project not found"));
  res.status(200).json(new ApiResponse(200, "Project fetched", project));
});

// UPDATE
export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    { new: true }
  );
  if (!project) return res.status(404).json(new ApiError(404, "Project not found"));
  res.status(200).json(new ApiResponse(200, "Project updated", project));
});

// DELETE
export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findOneAndDelete({ slug: req.params.slug });
  if (!project) return res.status(404).json(new ApiError(404, "Project not found"));
  res.status(200).json(new ApiResponse(200, "Project deleted"));
});
