const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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