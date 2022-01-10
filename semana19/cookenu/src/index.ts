import app from './app'
import signUp from './endpoints/signUp'
import login from './endpoints/login'
import createRecipes from './endpoints/createRecipes'

app.post("/users/signup", signUp)
app.post("/users/login", login)
app.post("/recipes/create", createRecipes)