const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  name: String,
  created: String,
});

module.exports = Task;
