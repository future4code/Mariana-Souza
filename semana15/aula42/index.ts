//EXERCICIO 1

//A)
// const minhaString: string = 7
// atribuir um numero a uma varival tipo string gera um erro.

// B)
// const meuNumero: number = 7

// C)
// const pessoa: { nome: string, idade: number, corFavorita: string } = {
    // nome: "Carol", 
    // idade: 25,
    // corFavorita: "azul"   

// }

// type pessoa = {
//     nome: string, 
//     idade: number,
//     corFavorita: string
// }

// const carol: pessoa = {
//     nome: "Carol", 
//     idade: 25,
//     corFavorita: "azul" 
// }
// const astrodev: pessoa = {
//     nome: "Astrodev", 
//     idade: 30,
//     corFavorita: "laranja" 
// }
// const gabriel: pessoa = {
//     nome: "Gabriel", 
//     idade: 32,
//     corFavorita: "verde" 
// }

// D)

// type pessoa = {
//     nome: string, 
//     idade: number,
//     corFavorita: CoresArcoIris
// }

// enum CoresArcoIris {
//     VIOLETA = "Violeta",
//     ANIL = "Anil",
//     AZUL = "Azul",
//     VERDE = "Verde",
//     AMARELO = "Amarelo",
//     LARANJA = "Laranja",
//     VERMELHO = "Vermelho"
// }

// const carol: pessoa = {
//     nome: "Carol", 
//     idade: 25,
//     corFavorita: CoresArcoIris.AZUL 
// }
// const astrodev: pessoa = {
//     nome: "Astrodev", 
//     idade: 30,
//     corFavorita: CoresArcoIris.LARANJA 
// }
// const gabriel: pessoa = {
//     nome: "Gabriel", 
//     idade: 33,
//     corFavorita: CoresArcoIris.VERDE
// }


//EXERCICIO 2

// function obterEstatisticas(numeros: number[]) {

//     const numerosOrdenados = numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma: number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas: {maior: number, menor: number, media: number} = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// type amostraDeDados = {
//     numeros: number[], 
//     obterEstatisticas: (numeros: number[]) => {maior: number, menor: number, media: number}
// }

// const amostraDeIdades: amostraDeDados = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: () => ???
// }


//EXERCICIO 3

// const posts = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]


type post = {
    autor: string, 
    texto: string
}

const posts: post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  const autorInformado: string = "Lord Voldemort"
  console.log(buscarPostsPorAutor(posts, autorInformado))

  function buscarPostsPorAutor(posts: post[],  autorInformado: string): post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }