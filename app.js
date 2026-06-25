const express = require("express");
const connectDB = require("./config/db");

const membershipRoutes = require("./routes/membershipRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const app = express();



require("dotenv").config();
connectDB();

app.use(express.json());
app.use("/api/membership", membershipRoutes);
app.use("/api/trainer", trainerRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});