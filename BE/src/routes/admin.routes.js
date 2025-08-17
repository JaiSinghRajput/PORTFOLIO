import express from "express";
import {
  addAdmin,
  loginAdmin,
  logoutAdmin,
  getAdminProfile,
} from "../controllers/admin.controller.js";
import { createBlog, deleteBlog, getAllBlogsAdmin, updateBlog } from "../controllers/blog.controller.js";
import { createContactInfo, updateContactInfo } from "../controllers/contactInfo.controller.js";
import { deleteMessage, getAllMessages, markAsRead } from "../controllers/inbox.controller.js";
import { upsertHero } from "../controllers/hero.controller.js";
import { createProject, deleteProject, updateProject } from "../controllers/project.controller.js";
import { createService, deleteService, updateService } from "../controllers/services.controller.js";
import { createVideo, deleteVideo, getAllVideos, toggleVideoPublish, updateVideo } from "../controllers/youtube.controller.js";
import { addAbout, updateAbout } from "../controllers/about.controller.js";

const router = express.Router();

router.post("/add", addAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/profile", getAdminProfile);

router.post('/about', addAbout);
router.put('/about', updateAbout);
// blog admin routes

router.get("/blogs", getAllBlogsAdmin);
router.post("/blog", createBlog);
router.put("/blog/:slug", updateBlog);
router.delete("/blog/:slug", deleteBlog);

// contact info admin routes
router.post('/contact', createContactInfo);
router.put('/contact', updateContactInfo);


// inbox Admin routes
router.get('/inbox', getAllMessages);
router.patch('/inbox/:id/read', markAsRead);
router.delete('/inbox/:id', deleteMessage);

// hero admin routes
router.post('/hero', upsertHero);


// project admin routes
router.post("/projects", createProject);
router.put("/projects/:slug", updateProject);
router.delete("/projects/:slug", deleteProject);


// service admin routes
router.post("/service", createService);
router.put("/service/:slug", updateService);
router.delete("/service/:slug", deleteService);


// youtube admin routes
router.get('/youtube', getAllVideos);
router.post('/youtube', createVideo);
router.put('/youtube/:slug', updateVideo);
router.delete('/youtube/:slug', deleteVideo);
router.patch('/youtube/toggle-publish/:slug', toggleVideoPublish);
export default router;
