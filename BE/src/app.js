import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import AboutRoutes from './routes/about.routes.js';
import adminRoutes from './routes/admin.routes.js';
import blogRoutes from './routes/blog.routes.js';
import inboxRoutes from './routes/inbox.routes.js';
import contactInfoRoutes from './routes/contactInfo.routes.js';
import { addAdmin, loginAdmin } from './controllers/admin.controller.js';
import { authenticateAdmin } from './middlewares/authenticateAdmin.js';
import HeroRoutes from './routes/hero.routes.js';
import ProjectsRoutes from './routes/project.routes.js';
import ServicesRoutes from './routes/service.routes.js';
import youtubeRoutes from './routes/youtube.routes.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
    limit: '10mb'
}));

//public admin routes
app.post("/api/admin/add", addAdmin);
app.post("/api/admin/login", loginAdmin);

// other sections routes
app.use('/api/hero', HeroRoutes)
app.use('/api/about', AboutRoutes);
app.use('/api/services', ServicesRoutes);
app.use('/api/projects', ProjectsRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/youtube', youtubeRoutes);
app.use('/api/inbox', inboxRoutes);
app.use('/api/contact', contactInfoRoutes);

//protected admin routes
app.use('/api/admin', authenticateAdmin, adminRoutes);

export default app;