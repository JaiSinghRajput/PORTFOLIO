import express from "express";
import {
  getAllServices,
  getServiceById,
} from "../controllers/service.controller.js";

const router = express.Router();

// Public routes
router.get("/", getAllServices);
router.get("/:id", getServiceById);



export default router;