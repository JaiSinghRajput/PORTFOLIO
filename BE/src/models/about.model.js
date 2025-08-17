import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    Overview: {
        aboutTitle: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true
        },
        points: [
            {
                point: {
                    type: String,
                    required: true
                }
            }],
        resumeLink: {
            type: String,
            required: true
        }
    },
    Skills: [
        {
            skillName: {
                type: String,
                required: true
            },
            proficiency: {
                type: Number,
                required: true
            }
        }
    ],
    Experience: [
        {
            companyName: {
                type: String,
                required: true
            },
            position: {
                type: String,
                required: true
            },
            duration: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
});
const About = mongoose.model("About", aboutSchema);

export default About;
