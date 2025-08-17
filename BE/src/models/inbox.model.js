import mongoose from "mongoose";
const inboxMessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
}, { timestamps: true });

const InboxMessage = mongoose.model("InboxMessage", inboxMessageSchema);
export default InboxMessage;