import Hero from '../models/hero.model.js';

// Create or Update Hero Section
export const upsertHero = async (req, res) => {
    try {
        const data = req.body;

        // Check if hero data already exists
        const existingHero = await Hero.findOne();

        if (existingHero) {
            const updated = await Hero.findByIdAndUpdate(existingHero._id, data, { new: true });
            return res.status(200).json({ message: "Hero section updated", hero: updated });
        }

        const newHero = await Hero.create(data);
        res.status(201).json({ message: "Hero section created", hero: newHero });
    } catch (error) {
        res.status(500).json({ message: "Error updating hero section", error: error.message });
    }
};

// Get Hero Section
export const getHero = async (req, res) => {
    try {
        const hero = await Hero.findOne();
        if (!hero) {
            return res.status(404).json({ message: "Hero section not found" });
        }
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ message: "Error fetching hero section", error: error.message });
    }
};
