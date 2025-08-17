import express from "express";
import {
  getAllServices,
  getServiceBySlug,
} from "../controllers/services.controller.js";

const router = express.Router();

// Public routes
router.get("/", getAllServices);
router.get("/:slug", getServiceBySlug);



export default router;