import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectBySlug,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";
import { authenticateAdmin } from "../middlewares/authenticateAdmin.js";

const router = express.Router();

// Public
router.get("/", getAllProjects);
router.get("/:slug", getProjectBySlug);

export default router;
