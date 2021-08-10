//EXERCÍCIOS DE INTERPRETAÇÃO

//1) a. false
//  b. false
//  c. true
//  d. boolean

// 2) O programa salva os dados digitados pelo usuário nas variáveis e tenta somá-los. É uma operação exclusiva de dados do tipo Number, e o que é digitado pelo usuário, por padrão, é do tipo String

// 3) Uma solução ao problema anterior é tranformar o tipo das variáveis primeiroNumero e segundoNumero.
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))




//EXERCÍCIOS DE ESCRITA

//EXERCÍCIO 1
let idadeUsuario = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual idade do/da seu/sua melhor amigo/a?"))

console.log("Sua idade é maior do que a do seu/sua melhor amigo/a?", idadeUsuario > idadeAmigo)

console.log("Difereça de idade é de", idadeUsuario - idadeAmigo, "anos.")




//EXERCÍCIO 2
let numeroPar = Number(prompt("Digite um número par"))
console.log("Resto:", numeroPar % 2)
//Números pares retornam resto 0 e ímpares retornam reso 1. Pode ser utilizado para testar paridade de números.


//EXERCICIO 3
let idadeAnos = Number(prompt("Qual sua idade?"))

idadeMeses = idadeAnos * 12 //12 meses/ano
idadeDias = idadeAnos * 365 //365 dias/ano
idadeHoras = idadeAnos * 8760 //365 dias*24 horas

console.log(idadeMeses, "meses")
console.log(idadeDias, "dias")
console.log(idadeHoras, "horas")


//EXERCÍCIO 4
let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))
let resultado

resultado = numero1 > numero2
console.log("O primeiro numero é maior que segundo?", resultado)

resultado = numero1 === numero2
console.log("O primeiro numero é igual ao segundo?", resultado)

resto = numero1 % numero2
resultado = resto === 0 
console.log("O primeiro numero é divisível pelo segundo?", resultado)

resto = numero2 % numero1
resultado = resto === 0 
console.log("O segundo numero é divisível pelo primeiro?", resultado)








