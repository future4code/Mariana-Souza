//EXERCICIOS DE INTERPRETAÇÃO

//EXERCICIO 1
//O código mapeia o array de objetos, cria um novo array e imprime, a cada item, seu conteúdo (nome e apelido), seu índice e o array completo.
//No console:
//{nome: "Amanda Rangel" apelido: "Mandi"} 0 
//    [{ nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }]
//Repetindo o mesmo para todos os itens. 


//EXERCICIO 2
//O código mapeia o array de objetos, criando um novo array que salva a propriedade nome de cada item e depois o imprime.  
//No console:
//{"Amanda Rangel", "Laís Petra", "Letícia Chijo"} 


//EXERCICIO 3
//O código mapeia o array de objetos, salva em um novo array os objetos que passarem pelo filtro, ou seja, apenas objetos com apelido diferente de Chijo, e, por fim, imprime o novo array.
//No console:
//[{ nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },]
  
 

//EXERCICIOS DE ESCRITA

//EXERCICIO 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// function verificaDogSalsicha (pet){
//     return pet.raca === "Salsicha";
// }

// function extrairNome(obj) {
//     return obj.nome
// }

// function verificaDogPoodle (pet){
//     return pet.raca === "Poodle";
// }

// const nomePets = pets.map(extrairNome)
// const dogsDaRacaSalsicha = pets.filter(verificaDogSalsicha);
// const dogsDaRacaPoodle = pets.filter(verificaDogPoodle).map(extrairNome)

// console.log("Nomes dos pets:", nomePets)
// console.log("Pets da raça Salsicha:", dogsDaRacaSalsicha)
// for(let pet of dogsDaRacaPoodle){
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet}`);
// }

//EXERCICIO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 },
    { nome: "Teste", categoria: "Limpeza", preco: 10 }
]




function aplicaDesconto(produto){
    produto.preco = 0.95 * produto.preco
    return produto.preco
}

const nomesProdutos = produtos.map(produto => produto.nome);
const produtosComDesconto = [...produtos]
produtosComDesconto.preco = produtosComDesconto.map(aplicaDesconto)
const produtosBebidas = produtos.filter(produto => produto.categoria ==="Bebidas")
const produtosYpe = produtos.filter(produto => produto.nome.includes("Ypê") )
// const produtosYpeComDesconto = produtosComDesconto.filter(produto => produto.nome.includes("Ypê") )

console.log(nomesProdutos)//funciona
console.log("podutos com desconto:")
for (produto of produtosComDesconto){
    console.log(produto.nome, produto.preco)//funciona
} 
console.log("Bedidas: ", produtosBebidas)//funciona
console.log("Produtos Ypê:", produtosYpe)//funciona
for (produto of produtosYpe){
    console.log(`Compre ${produto.nome} por ${produto.preco}`)//funciona
} 

//console.log(produtos)//a linha 88 altera o array produtos original? Porque os preços dos produtos estao com desconto no original?


