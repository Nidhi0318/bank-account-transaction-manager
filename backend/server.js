const express = require("express");
const cors = require("cors");

const transactionRoutes = require("./routes/transactionRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

// Middleware
app.use(logger);

// Routes
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Personal Finance API is running"
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});