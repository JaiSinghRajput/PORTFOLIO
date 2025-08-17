import jwt from "jsonwebtoken";
import { ApiError } from "../utils/index.js";

const authenticateAdmin = (req, res, next) => {
  const token = req.cookies.admin_token;

  if (!token) return res.status(401).json(new ApiError(401, "Unauthorized: Token missing"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid or expired token");
  }
};

export { authenticateAdmin };
