import Admin from "../models/admin.model.js";
import jwt from "jsonwebtoken";
import { asyncHandler, ApiError, ApiResponse } from "../utils/index.js";

const generateToken = (adminId) => {
  return jwt.sign({ id: adminId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const addAdmin = asyncHandler(async (req, res) => { 
  const existingAdmin = await Admin.findOne();
  if (existingAdmin) {
    throw new ApiError(405, "Admin already exists");
  }

  const { adminUserName, adminPassword } = req.body;

  const newAdmin = await Admin.create({
    adminUserName,
    adminPassword,
  });

  res
    .status(201)
    .json(new ApiResponse(201, "Admin created successfully", { id: newAdmin._id }));
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { adminUserName, adminPassword } = req.body;

  const admin = await Admin.findOne({ adminUserName });

  if (!admin) {
    return res.status(401).json(new ApiError(401, "Invalid username or password"));
  }

  const isMatch = await admin.comparePassword(adminPassword);
  if (!isMatch) {
    return res.status(401).json(new ApiError(401, "Invalid username or password"));
  }

  const token = generateToken(admin._id);

  res
    .cookie("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge:   process.env.JWT_EXPIRATION ? parseInt(process.env.JWT_EXPIRATION) * 60 * 60 * 1000 : 3600000, 
    })
    .status(200)
    .json(new ApiResponse(200, "Login successful", { token }));
});


// Admin logout
const logoutAdmin = asyncHandler(async (req, res) => {
  res
    .clearCookie("admin_token", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json(new ApiResponse(200, "Logout successful"));
});

// Get current admin profile
const getAdminProfile = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.user.id).select("-adminPassword");

  if (!admin) {
    return res.status(404).json(new ApiError(404, "Admin not found"));
  }

  res.status(200).json(new ApiResponse(200, "Admin profile", admin));
});

export { addAdmin, loginAdmin, logoutAdmin, getAdminProfile };
