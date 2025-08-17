import express from 'express';

import { getAbout } from '../controllers/about.controller.js';

const router = express.Router();

// Define routes for the About section
router.get('/', getAbout);

export default router;