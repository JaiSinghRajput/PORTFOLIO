import express from 'express';
import { getHero} from '../controllers/hero.controller.js';

const router = express.Router();

router.get('/', getHero); 

export default router;
