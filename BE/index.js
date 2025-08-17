import app from "./src/app.js";
import connectDB from "./src/db/connection.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});