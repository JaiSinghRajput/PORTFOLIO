import mongoose from "mongoose";
const HeroSchema = new mongoose.Schema({
    HeroTitle:{
        type: String,
        required: true
    },
    HeroSubtitle: {
        type: String,
        required: true
    },
    HeroBgImage: {
        type: String,
        required: true
    },
    KPI:[
        {
            kpiPoint: {
                type: String,
                required: true
            },
            kpiValue: {
                type: String,
                required: true
            }
        }
    ]
})

const Hero = mongoose.model("Hero", HeroSchema);

export default Hero;
