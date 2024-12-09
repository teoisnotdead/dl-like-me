import express from "express"
import { PostController } from "../controllers/posts.controller.js"

const router = express.Router()

router.get("/posts", PostController.getPosts)
router.post("/posts", PostController.createPost)
router.put("/posts/like/:id", PostController.updateLikes)

export default router