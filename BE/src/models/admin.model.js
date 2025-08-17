import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  adminUserName: {
    type: String,
    required: true,
    unique: true
  },
  adminPassword: {
    type: String,
    required: true
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
});

adminSchema.pre("save", async function (next) {
  if (!this.isModified("adminPassword")) return next();
  this.adminPassword = await bcrypt.hash(this.adminPassword, 10);
  next();
});

// Method to compare password
adminSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.adminPassword);
};

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
