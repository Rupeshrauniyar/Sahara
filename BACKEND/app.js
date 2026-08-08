const express = require("express");
const app = express();
const port = 3000;
const db = require("./db/DB.js");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
async function connectDB() {
  await db();
  console.log("Connected to MongoDB");
}
connectDB();

// Routes
const aiRoutes = require("./routes/ai.routes");
const authRoutes = require("./routes/auth.routes");

// Use Routes
app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
