import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"
import { country } from "./types"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3005, () => {
  console.log("Servidor pronto!")
})

// TESTE
// app.get("/test", (req, res) => {
//   res.send("Olá do Express")
// })

//endpoint 1
app.get("/countries", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name
  }))

  res.status(200).send(result)
})

//endpoint 3
app.get("countries/search", (req, res) => {
  let result: country[] = countries;
  try {
    if (!req.query.name && !req.query.capital && !req.query.continent) {
      throw new Error("Invalid Parameters");
    }
    if (req.query.name) {
      result = result.filter((country) =>
        country.name.includes(req.query.name as string)
      );
    }

    if (req.query.capital) {
      result = result.filter((country) =>
        country.capital.includes(req.query.capital as string)
      );
    }

    if (req.query.continent) {
      result = result.filter((country) =>
        country.continent.includes(req.query.continent as string)
      );
    }
    res.status(200).send(result);

  }catch (error) {
    res.status(400).send("Erro 400");
  }
})

//endpoint 2
// app.get("/countries/:id", (req, res) => {

//   const result = countries.find((country) => {
//     return country.id === Number(req.params.id)
//   })

//   if (result) {
//     res.send(result)
//   } else {
//     res.status(404).send("País não encontrado")
//   }

// })




// //endpoint 5
// app.delete("/countries/:id", async (req, res) => {
//   try {

//     const token = req.headers.authorization

//     if (!token) {
//       res.statusCode = 401
//       throw new Error()
//     }

//     const index = countries.findIndex((country) => {
//       return country.id === Number(req.params.id)
//     })

//     if (index === -1) {
//       res.statusCode = 404
//       throw new Error()
//     }

//     countries.splice(index, 1)

//     res.status(204).end()

//   } catch (error: any) {

//     if (res.statusCode === 200) {
//       res.status(500).end()
//     } else {
//       res.end()
//     }
//   }
// })
