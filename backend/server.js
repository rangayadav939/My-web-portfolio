const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "..")));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// Contact form API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New Message:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  res.json({ message: "Message received successfully!" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
