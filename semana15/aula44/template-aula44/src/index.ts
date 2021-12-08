import express, { request, Request, Response } from 'express'
import cors from 'cors'
import { users, User } from './user'




const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


//pegar todos os usuarios
app.get("/users", (req: Request, res: Response) => {
  const result = users.map((user)=>{
    return { id: user.id, name: user.name }
})
  res.status(200).send(result);
})


//busca pelo nome
app.get("/users/search", (req: Request, res: Response)=>{
  let result = users;

  try{
    if(req.query.name){
      result = result.filter((user)=>{
        return user.name.toLowerCase().includes(req.query.name as string);
      })
    }
    res.status(200).send(result)
  }catch (error) {
    res.status(400).send("Não foi possivel encontrar usuário com este nome");
  }
})

//pegar ususarios de acordo com tipo
app.get("/users/:type", (req: Request, res: Response)=>{
  let errorCode: number = 400;
  
  try{
    let result: User[] = [];
    users.map((user) => {
      if(user.type === req.params.type.toUpperCase()){
        result.push(user);
      }
    });
    if(result.length === 0){
      errorCode = 404;
      throw new Error();
    }
    res.status(200).send(result);
  }catch (error) {
    res.status(errorCode).send("Não foi possivel encontrar usuario");
  }
  
})

//criar usuario
app.put("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try{
    const authorization: string = req.headers.authorization as string;

    if(!authorization || authorization.length < 10) {
      errorCode = 401;
      throw new Error("Invalid Parameters");
    }

    if(!req.body.name && !req.body.email && !req.body.type && !req.body.age){
      throw new Error("Parametros invalidos");
    }

    const userName = users.findIndex((user) => {
      user.name === req.body.name
    });

    if(userName !== -1){
      errorCode = 409;
      throw new Error("usuário já existe");
    }

    const newUser: User = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age
    };

    users.push(newUser);

    res.status(200).send({message: "Sucesso. Usuário adicionado", user: newUser });
  }catch(error){
    res.status(errorCode).send("Adicionar usuario falhou");
  }
});

