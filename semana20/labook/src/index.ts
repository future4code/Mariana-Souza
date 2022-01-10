import { app } from "./controller/app"
import { PostController } from "./controller/PostController"
import { UserController } from "./controller/UserController"

app.get("/", (req, res)=>{
    res.send("Hello from express")
})

const postController = new PostController()
app.get("/posts/:id", postController.getPostById )

const userController = new UserController()
app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)