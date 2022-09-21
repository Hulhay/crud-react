import express from "express";
import {
    getUsers,
    getUserByID,
    createUser,
    updateUserByID,
    deleteUserByID
} from "../controller/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserByID);
router.post("/users", createUser);
router.patch("/users/:id", updateUserByID);
router.delete("/users/:id", deleteUserByID);

export default router;