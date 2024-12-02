import express from "express"
import cors from "cors"

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.send("Hello World")
})

export default app