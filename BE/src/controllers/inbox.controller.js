import InboxMessage from '../models/inbox.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// POST /api/inbox - submit message
export const submitMessage = async (req, res) => {
    try {
        const newMessage = await InboxMessage.create(req.body);
        res.status(201).json(new ApiResponse(201, 'Message submitted successfully', newMessage));
    } catch (err) {
        res.status(400).json(new ApiError(400, 'Failed to submit message', err.message));
    }
};

// GET /api/admin/inbox - get all messages (admin only)
export const getAllMessages = async (req, res) => {
    try {
        const messages = await InboxMessage.find().sort({ createdAt: -1 });
        res.json(new ApiResponse(200, 'Messages fetched successfully', messages));
    } catch (err) {
        res.status(500).json(new ApiError(500, 'Failed to fetch messages', err.message));
    }
};

// PATCH /api/admin/inbox/:id/read - mark as read
export const markAsRead = async (req, res) => {
    try {
        const message = await InboxMessage.findByIdAndUpdate(
            req.params.id,
            { isRead: true },
            { new: true }
        );
        res.json(new ApiResponse(200, 'Message marked as read', message));
    } catch (err) {
        res.status(400).json(new ApiError(400, 'Failed to mark message as read', err.message));
    }
};

// DELETE /api/admin/inbox/:id - delete message
export const deleteMessage = async (req, res) => {
    try {
        await InboxMessage.findByIdAndDelete(req.params.id);
        res.status(204).json(new ApiResponse(204, 'Message deleted successfully'));
    } catch (err) {
        res.status(400).json(new ApiError(400, 'Failed to delete message', err.message));
    }
};
