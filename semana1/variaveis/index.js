// //EXERCÍCIOS AULA 
//1) No console:
//     10
//     10 5

//2) No console:
//     Erro. A variável c não foi declarada.

// 3) O código do exercício 3 recebe informações de horas trabalhadas e salário por dia e calcula o salário por horas. As variáveis poderiam ser melhor nomeados com p: horasDia e t:salarioDia

//testando respostas dos exercícios 1 e 2
// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)
//Errado. Achei que a variável c daria problema já que não foi declarada. 


// EXERCÍCIOS DE ESCRITA
let nome
let idade
console.log(typeof nome, typeof idade)
//O resultado impresso foi undefined. Era o esperado pois como não foi declarado nenhum valor, a variável não possui tipo definido.
nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome, typeof idade)
//Os dois tipos de variáveis assumem string como tipo, mesmo uma delas tendo um número como valor definido pelo usuário.
console.log("Olá", nome, "você tem", idade, "anos!")

//2

primeiraPergunta = "Você gosta de ouvir música?"
segundaPergunta = "Você já estudou programação antes?"
terceiraPergunta = "Você gosta de ler?"
primeiraResposta = prompt(primeiraPergunta)
segundaResposta = prompt(segundaPergunta)
terceiraResposta = prompt(terceiraPergunta)

console.log(primeiraPergunta, primeiraResposta)
console.log(segundaPergunta, segundaResposta)
console.log(terceiraPergunta, terceiraResposta)


//3
let a = 10
let b = 25
let auxiliar 

auxiliar = a
a = b
b = auxiliar
console.log("O novo valor de a é:", a)
console.log("O novo valor de b é:", b)


//DESAFIO
let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

soma = num1 + num2
multiplicacao = num1 * num2
console.log("O primeiro número somado ao segundo resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo resulta em:", multiplicacao)



