import express from 'express';
import {
    submitMessage,
} from '../controllers/inbox.controller.js';

const router = express.Router();

router.post('/', submitMessage);

export default router;
