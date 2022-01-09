import { app } from "./controller/app"
import { PostController } from "./controller/PostController"

app.get("/", (req, res)=>{
    res.send("Hello from express")
})

const postController = new PostController()
app.get("/posts/:id", postController.getPostById )