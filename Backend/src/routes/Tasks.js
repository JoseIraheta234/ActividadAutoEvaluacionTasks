import express from "express";
import TasksController from "../controllers/TasksController.js";

const router = express.Router();

router.route("/").get(TasksController.getTasks)
.post(TasksController.insertTasks)

router.route("/:id")
.put(TasksController.updateTasks)
.delete(TasksController.deleteTasks);

export default router;