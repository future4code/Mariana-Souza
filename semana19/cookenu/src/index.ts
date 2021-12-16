import app from './app'
import signUp from './endpoints/signUp'

app.post("/users", signUp)