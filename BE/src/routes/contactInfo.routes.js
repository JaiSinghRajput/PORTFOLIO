import express from 'express';
import {
    getContactInfo
} from '../controllers/contactInfo.controller.js';

const router = express.Router();

// Public
router.get('/', getContactInfo);

export default router;
