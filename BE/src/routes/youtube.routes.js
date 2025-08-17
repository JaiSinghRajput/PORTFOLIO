import express from 'express';
import {
    getPublishedVideos,
    getVideoBySlug,
} from '../controllers/youtube.controller.js';

const router = express.Router();
s
router.get('/', getPublishedVideos);
router.get('/:slug', getVideoBySlug);
export default router;
