//EXERCICIOS AULA 6
//EXERCICIOS DE INTERPRETAÇÃO
//EXERCICIO 1
//a. No console, deve ser impresso resultado de variavel * 5. Nesse caso, 10 e 50
//b. Nada seria impresso no console porque a função só calcula e retorna o valor, deixando a cargo da chamada dizer o que deve ser feito com o valor retornado.

//EXERCICIO 2
//a. A função verifica se a palavra cenoura aparece num texto digitado pelo usuário, e retorna o texto digitado, todo em letras minúsculas e a resposta da verificação. Pode ser usada para validar uma entrada do usuário num programa, ou para saber se existe numa entrada de dados a ocorrência de determinada expressão.
//b. i. eu gosto de cenoura true
// ii. cenoura é bom pra vista true
// iii. cenouras crescem na terra true


//EXERCICIOS DE ESCRITA
//EXERCICIO 1
// //a)
// function imprimeFrase(){
//     const nome = "Carol"
//     const idade = 25
//     const cidade = "Juiz de Fora"
//     const mensagem = `Meu nome é ${nome} tenho ${idade} anos e moro em ${cidade}`
//     console.log(mensagem)
// }
// imprimeFrase()

// //b)

// const nomeUsuario = prompt("Informe seu nome:")
// const idadeUsuario = Number(prompt("Informe sua idade:"))
// const cidadeUsuario = prompt("Informe sua cidade:")
// const profissaoUsuario = prompt("Informe sua profissão:")

// function retornaString(nome, idade, cidade, profissao){
//     const string = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
//     return string
// }

// console.log(retornaString(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario))


//EXERCICIO 2
//a)
// const numero1 = Number(prompt("Informe primeiro número:"))
//  const numero2 = Number(prompt("Informe segundo número:"))


// function soma(primeiroNumero, segundoNumero){
//     const soma = primeiroNumero + segundoNumero
//     return soma
// }
// console.log("Resultado da Soma:", soma(numero1, numero2))


// function numeroMaior(primeiroNumero, segundoNumero){
//     return primeiroNumero >= segundoNumero
// }
// console.log("Primeiro número é maior ou igual que o segundo?:", numeroMaior(numero1, numero2))


// function numeroPar(numero){
//     resto = numero % 2
//     return resto === 0
// }
// console.log("O primeiro número é par?", numeroPar(numero1))


// function recebeString(mensagem){
//     console.log(mensagem.toLowerCase(), mensagem.length)
// }
// const string = "Amo CenOura"
// recebeString(string)

//EXERCICIO 3
const primeiroNumeroUsuario = Number(prompt("Informe segundo número:"))
const segundoNumero = Number(prompt("Informe segundo número:"))