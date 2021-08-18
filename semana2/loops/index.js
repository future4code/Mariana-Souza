//EXERCICIOS DE INTERPRETAÇÃO

//EXERCICIO 1
//O código cria um loop que soma à variável valor, que inicialmente vale 0, o valor de i a cada iteração, até que i deixe de ser < 5. O resultado impresso no console é 10

//EXERCICIO 2
//a)Vai ser impresso no console a sequência: 19 21 23 25 27 30

//b)Nesse caso, deveria ser usado a estrutura tradcional de for, usando i como índice de cada elemento
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (let i = 0; i < lista.length; i++) {
//     let numero = lista[i];
//     if (numero > 18) {
//         console.log("Número", numero, "Índice:", i);
//     }
// }

//EXERCICIO 3
// //No console:
// *
// **
// ***
// ****

//EXERCICIOS DE ESCRITA
//EXERCICIO 1

// let qtdePet = Number(prompt("Quantos bichinhos de estimação você possui?"));
// const nomesPet = [];

// if (qtdePet === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else if(qtdePet > 0){
//     while(qtdePet > nomesPet.length){
//         nome = prompt("Qual nome de seu(s) pet(s)?");
//     nomesPet.push(nome);
//     }
//     console.log("Os nomes dos seus pets são:", nomesPet)
// }else{
//     console.log("Digite um valor válido para quantidade de pets")
// }

//EXERCÍCIO 2
// const arrayOriginal = [5, 6, 1, 102, 7, 3, 98, 15, 64];
// let arrayPares = []


// function imprimeValores(array){
//     for (let elemento of array){
//         console.log(elemento);
//     }    
// }

// function imprimeValoresDivididosPorDez(array){
//     for (let elemento of array){
//         elemento = elemento / 10;
//         console.log(elemento);
//     }
// }

// function testaPares(array){
//     for (let elementoPar of array){
//         if (elementoPar % 2 === 0){
//             arrayPares.push(elementoPar);
//         }
        
//     }
//     console.log(arrayPares);
// }

// function imprimeString(array){
//     let arrayString = []
//     for (let i = 0; i < array.length; i++) {
//         let numero = array[i];
//         let string = `O elemento no índex ${i} é ${numero}`;
//         arrayString.push(string);
//     }
//     console.log(arrayString);
// }

// function imprimeMaiorOuMenor(array){
//     let valorMaximo = array[0];
//     let valorMinimo = array[0]; 
//     for(let elemento of array){
//         if(elemento > valorMaximo){
//             valorMaximo = elemento
//         }
//         if (elemento < valorMinimo){
//             valorMinimo = elemento
//         }
//     }
//     console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}.`);
// }
// console.log("Valores do array:");
// imprimeValores(arrayOriginal);
// console.log("Valores do array divididos por 10:");
// imprimeValoresDivididosPorDez(arrayOriginal);
// console.log("Valores pares do array:");
// testaPares(arrayOriginal);
// console.log("Valores do array e seus índices:");
// imprimeString(arrayOriginal);
// imprimeMaiorOuMenor(arrayOriginal);

//DESAFIOS
//EXERCÍCIO 1


// const numeroPrimeiroJogador = Number(prompt("Que número você pensou?"));
// console.log("Vamos jogar!");
// let numeroSegundoJogador = Number(prompt("Dê um palpite:"));
// let contador = 1;
// while(numeroSegundoJogador !== numeroPrimeiroJogador){
//     console.log("O número chutado foi: ", numeroSegundoJogador);
//     if(numeroSegundoJogador > numeroPrimeiroJogador){
//         console.log("Errou! O número escolhido é menor.");
//     }
//     if(numeroSegundoJogador < numeroPrimeiroJogador){
//         console.log("Errou! O número escolhido é maior.");
//     }
//     numeroSegundoJogador = Number(prompt("Dê outro palpite:"));
//     contador++; 
// }
// console.log("O número chutado foi: ", numeroSegundoJogador);
// console.log("Acertou!!!");
// console.log("O número de tentativas foi:", contador);

//EXERCÍCIO 2

// function getRandom(max) {
//     return Math.floor(Math.random() * max + 1)
// }

// const numeroPrimeiroJogador = getRandom(100);
// console.log("Vamos jogar!");
// let numeroSegundoJogador = Number(prompt("Dê um palpite:"));
// let contador = 1;
// while(numeroSegundoJogador !== numeroPrimeiroJogador){
//     console.log("O número chutado foi: ", numeroSegundoJogador);
//     if(numeroSegundoJogador > numeroPrimeiroJogador){
//         console.log("Errou! O número escolhido é menor.");
//     }
//     if(numeroSegundoJogador < numeroPrimeiroJogador){
//         console.log("Errou! O número escolhido é maior.");
//     }
//     numeroSegundoJogador = Number(prompt("Dê outro palpite:"));
//     contador++; 
// }
// console.log("O número chutado foi: ", numeroSegundoJogador);
// console.log("Acertou!!!");
// console.log("O número de tentativas foi:", contador);
