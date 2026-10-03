const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Lets Express read JSON bodies sent in POST requests
app.use(express.json());

// Serves index.html (and other files) from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Shape of an "update" document stored in MongoDB
const updateSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true },
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

const Update = mongoose.model("Update", updateSchema);

// Simple check that the server is up
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Save a new update
app.post("/updates", async (req, res) => {
  try {
    const update = await Update.create({ text: req.body.text });
    res.status(201).json(update);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List all updates, newest first
app.get("/updates", async (req, res) => {
  try {
    const updates = await Update.find().sort({ createdAt: -1 });
    res.json(updates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit the text of an existing update
app.put("/updates/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const text = typeof req.body.text === "string" ? req.body.text.trim() : "";
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const update = await Update.findByIdAndUpdate(
      id,
      { text },
      { new: true, runValidators: true } // return the edited document
    );
    if (!update) {
      return res.status(404).json({ error: "Update not found" });
    }
    res.json(update);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an update
app.delete("/updates/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const update = await Update.findByIdAndDelete(id);
    if (!update) {
      return res.status(404).json({ error: "Update not found" });
    }
    res.json({ deleted: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
