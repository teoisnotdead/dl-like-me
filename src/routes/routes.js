import express from "express"
import { PostController } from "../controllers/posts.controller.js"

const router = express.Router()

router.get("/posts", PostController.getPosts)
router.post("/posts", PostController.createPost)

export default router