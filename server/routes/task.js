const express = require("express");
const router = express.Router();

// import models
const Task = require("../models/Task");

router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "OK GET!!!" });
  } catch (error) {
    res.status(400).json({ message: "NON PROBLEME !!!" });
  }
});

router.post("/tasks", async (req, res) => {
  try {
    const { titleTask, created } = req.fields;

    const newTask = await new Task({
      name: titleTask,
      created: created,
    });

    await newTask.save();

    res.status(200).json({ message: "Task created !" });
  } catch (error) {
    res.status(400).json({ message: "NON PROBLEME !!!" });
  }
});

module.exports = router;
