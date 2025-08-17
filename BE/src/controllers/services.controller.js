import Service from "../models/services.model.js";
import { asyncHandler, ApiError, ApiResponse } from "../utils/index.js";
// Create service
export const createService = asyncHandler(async (req, res) => {
    const service = await Service.create(req.body);
    res.status(201).json(new ApiResponse(201, "Service created", service));
});

// Get all services
export const getAllServices = asyncHandler(async (req, res) => {
    const services = await Service.find();
    res.status(200).json(new ApiResponse(200, "Services fetched", services));
});

// Get service by slug
export const getServiceBySlug = asyncHandler(async (req, res) => {
  const service = await Service.findOne({ slug: req.params.slug });
  if (!service) return res.status(404).json(new ApiError(404, "Service not found"));
  res.status(200).json(new ApiResponse(200, "Service fetched", service));
});

// Update service
export const updateService = asyncHandler(async (req, res) => {
    const service = await Service.findOneAndUpdate({ slug: req.params.slug }, req.body, {
        new: true,
    });
    if (!service) return res.status(404).json(new ApiError(404, "Service not found"));
    res.status(200).json(new ApiResponse(200, "Service updated", service));
});

// Delete service
export const deleteService = asyncHandler(async (req, res) => {
    const service = await Service.findOneAndDelete({ slug: req.params.slug });
    if (!service) return res.status(404).json(new ApiError(404, "Service not found"));
    res.status(200).json(new ApiResponse(200, "Service deleted"));
});
