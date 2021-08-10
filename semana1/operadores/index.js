//EXERCÍCIOS DE  INTERPRETAÇÃO



//EXERCICIO 1 
//a. false
//b. false
//c. true
//d. booolean

//EXERCICIO 2
//Este programa tenta somar dois números fornecidos pelo usuário. Porém, o retorno de um prompt é, por padrão, uma string, não sendo possível realizar a soma.

//EXERCICIO 3
//Solução: É preciso transformar a string recebida no prompt em number.
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))




//EXERCÍCIOS DE  ESCRITA



//EXERCICIO 1

// let idade = Number(prompt("Informe sua idade"))
// let idadeAmigo = Number(prompt("Informe a idade do/da seu/sua melhor amigo/a"))

// console.log("Sua idade é maior do que a do/da seu/sua melhor amigo/a?", idade > idadeAmigo)
// console.log("Diferença de idade:", idade - idadeAmigo)



//EXERCICIO 2

// let numPar = Number(prompt("Informe um número par"))

// console.log("Resto:", numPar % 2)

// //Números pares retornam resto 0 enquanto números ímpares retornam resto 1. Útil para testar paridade de números recebidos ou calculados.



//EXERCICIO 3

// let idadeAnos = Number(prompt("Informe sua idade"))

// let idadeMeses = idadeAnos * 12 //12 meses
// let idadeDias = idadeAnos * 365 //365 dias
// let idadeHoras = idadeAnos * 8760 //365 dias* 24 horas

// console.log(idadeAnos, "anos,", idadeMeses, "meses,", idadeDias, "dias,", idadeHoras, "horas.")


//EXERCICIO 4

let num1 = Number(prompt("Informe primeiro número:"))
let num2 = Number(prompt("Informe segundo número:"))

resultado = num1 > num2
console.log("O primeiro numero é maior que segundo?", resultado)

resultado = num1 === num2
console.log("O primeiro numero é igual ao segundo?", resultado)

resto = num1 % num2
resultado = resto === 0
console.log("O primeiro numero é divisível pelo segundo?", resultado)

resto = num2 % num1
resultado = resto === 0
console.log("O segundo numero é divisível pelo primeiro?", resultado)



