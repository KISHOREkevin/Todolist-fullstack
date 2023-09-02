import express from "express";
import {compareUser, createUser, deleteOneUser, getAllUsers, getOneUser, updateUser} from "../controllers/userController.js";

const router = express.Router();

router.get("/",getAllUsers);
router.post("/equals",compareUser);
router.get("/:id",getOneUser);
router.post("/",createUser);
router.delete("/:id",deleteOneUser);
router.put("/:id",updateUser);

export default router;