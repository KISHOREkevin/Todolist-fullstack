import express from "express";
const router = express.Router();
import { createTask, deleteTask, getAllTasks, getOneTask, updateTask } from "../controllers/taskController.js";

router.get("/:id",getAllTasks);
router.get("/:id/:taskId",getOneTask);
router.post("/:id",createTask);
router.delete("/:id/:taskId",deleteTask);
router.put("/:id/:taskId",updateTask);
export default router;