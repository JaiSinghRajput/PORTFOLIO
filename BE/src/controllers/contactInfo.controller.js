import ContactInfo from '../models/contactInfo.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// GET /api/contact - public view
export const getContactInfo = async (req, res) => {
    try {
        const info = await ContactInfo.findOne();
        res.json(new ApiResponse(200, 'Contact info fetched successfully', info));
    } catch (err) {
        res.status(500).json(new ApiError(500, 'Failed to fetch contact info', err.message));
    }
};

// POST /api/admin/contact - create new (once only)
export const createContactInfo = async (req, res) => {
    try {
        const existing = await ContactInfo.findOne();
        if (existing) return res.status(400).json(new ApiError(400, 'Already exists'));

        const info = await ContactInfo.create(req.body);
        res.status(201).json(new ApiResponse(201, 'Contact info created successfully', info));
    } catch (err) {
        res.status(400).json(new ApiError(400, 'Failed to create contact info', err.message));
    }
};

// PUT /api/admin/contact - update existing
export const updateContactInfo = async (req, res) => {
    try {
        const info = await ContactInfo.findOneAndUpdate({}, req.body, {
            new: true,
            runValidators: true,
        });
        res.json(new ApiResponse(200, 'Contact info updated successfully', info));
    } catch (err) {
        res.status(400).json(new ApiError(400, 'Failed to update contact info', err.message));
    }
};
