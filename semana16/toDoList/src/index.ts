import express from 'express';
import createUser from './endpoints/createUsers';
import getUserById from './endpoints/getUserById';


const app = express()
app.use(express.json())

app.put('/user', createUser)

app.get('/user/:id', getUserById)

app.listen(3003, ()=>{
    console.log("Server running in the port 3003")
})

