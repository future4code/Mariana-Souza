//EXERCÍCIOS DE INTTERPRETAÇÃO
//EXERCÍCIO 1
//  Mateus Nachtergaele
//  Virginia Cavendish
//  Globo 14h

//EXERCÍCIO 2
//a)Juca 3 SRD
//  Juba 3 SRD
//  Jubo 3 SRD

//b)Os três pontos copiam as propriedades e valores do objeto anterior no novo que está sendo criado

//EXERCÍCIO 3
//A função retorna objeto e o valor da propriedade recebidos como parâmetro, e é impresso no console pelo console.log da chamada da função. Nesse caso, a função deve imprimir "false", valor da propriedade "backender" e "undefined", já que a propriedade altura não foi declarada.

//EXERCÍCIOS DE ESCRITA
//EXERCÍCIO 1

// const pessoa = {
//     nome: "Fernando",
//     apelidos: ["Fê", "Fernandinho", "Nando"]
// }

// function imprimeFrase(objeto){
//     const frase = `Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`
//     console.log(frase)
// }
// imprimeFrase(pessoa)

// const novaPessoa = {
//     ...pessoa,
//     apelidos: ["Fefê", "Nandinho", "Dinho"]
// }
// imprimeFrase(novaPessoa)


//EXERCÍCIO 2

// const primeiraPessoa = {
//     nome: "Gabriel",
//     idade: 33,
//     profissao: "Técnico Help Desk"
// }
// const segundaPessoa = {
//     nome: "Carol",
//     idade: 25,
//     profissao: "Estudante"
// }

// function retornaArray(objeto){
//     const array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
//     return array
// }
// console.log(retornaArray(primeiraPessoa))
// console.log(retornaArray(segundaPessoa))


//EXERCICIO 3

const carrinho = []

const fruta1 = {
    nome: "Abacaxi",
    isDisponivel: true
}
const fruta2 = {
    nome: "Maçã",
    isDisponivel: true
}
const fruta3 = {
    nome: "Manga",
    isDisponivel: true
}

function preencheCarrinho(fruta){
    carrinho.push(fruta)    
}
preencheCarrinho(fruta1)
preencheCarrinho(fruta2)
preencheCarrinho(fruta3)
console.log("Carrinho:", carrinho)