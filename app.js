const express = require("express");
const connectDB = require("./config/db");

const membershipRoutes = require("./routes/membershipRoutes");
const app = express();

require("dotenv").config();
connectDB();

app.use(express.json());
app.use("/api/membership", membershipRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});