import mongoose from "mongoose";
const contactInfoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    details: [{
        key: { type: String, required: true },
        value: { type: String, required: true },
    }],
    profileLinks: [{
        platform: { type: String, required: true },
        link: { type: String, required: true },
    }],
}, { timestamps: true });

const ContactInfo = mongoose.model("ContactInfo", contactInfoSchema);
export default ContactInfo;