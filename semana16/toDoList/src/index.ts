import express from 'express';
import createTask from './endpoints/createTasks';
import createUser from './endpoints/createUsers';
import editUser from './endpoints/editUser';
import getUserById from './endpoints/getUserById';


const app = express()
app.use(express.json())

app.put('/user', createUser)

app.get('/user/:id', getUserById)

app.post('/user/edit/:id', editUser)

app.put('/task', createTask)
app.listen(3003, ()=>{
    console.log("Server running in the port 3003")
})

