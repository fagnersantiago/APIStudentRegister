import express from "express";
import UserController from "./controller/UserController";
import ClassController from "./controller/ClassController";
import CommentController from "./controller/CommentController";
const router = express.Router();

const User = new UserController();
const Class = new ClassController();
const Comment = new CommentController();

router.post("/users", User.store);
router.post("/classes", Class.store);
router.delete("/classes/:id", Class.delete);
router.put("/classes", Class.update);
router.post("/classes/comments", Comment.store);
router.delete("/classes/comments/:id", Comment.delete);
export default router;
