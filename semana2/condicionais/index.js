//EXERCÍCIOS DE INTERPRETAÇÃO
//EXERCÍCIO 1
//O código recebe um número do usuário e verifica se é par ou não, retornando "Passou no teste" caso seja par ou "Não passou no teste", se for ímpar.

//EXERCÍCIO 2
//a) O código recebe o nome de uma fruta e altera a variável preco de acordo com a fruta recebida.
//b)"O preço da fruta Maçã é R$2.25"
//c)"O preço da fruta Pera é R$5" -> retirando o break, o código continua executando, assim a variavel preco receberá o valor do case abaixo até encontrar outro break ou até terminar o switch. 

//EXERCÍCIO 3
//a)A primeira linha pede ao usuario pra digitar uma informação (através do prompt) e transforma a entrada do usuario no tipo number, e armazena o valor na variavel numero
//b)"Esse número passou no teste", se o número for 10. Nenhuma mensagem se o número for -10, além do aviso de erro.
//c) Haverá um erro, pois a variavel mensagem criada dentro do if não pode ser acessada fora dele.



//EXERCÍCIOS DE ESCRITA
//EXERCÍCIO 1

// const idade = Number(prompt("Informe sua idade:"));

// if(idade >= 18){
//     console.log("Pode dirigir!");
// }else{
//     console.log("Você não pode dirigir!")
// }


//EXERCÍCIO 2

// const turno = prompt("Digite o turno que você estuda. Use M para matutino, V para vespertino ou N para noturno.").toUpperCase();

// if(turno === "M"){
//     console.log("Bom dia!");
// }else if(turno === "V"){
//     console.log("Boa tarde");
// }else if(turno === "N"){
//     console.log("Boa noite");
// }else{
//     console.log("Informe um turno válido.");
// }
//EXERCÍCIO 3

//const turno = prompt("Digite o turno em que você estuda. Use M para matutino, V para vespertino ou N para noturno.").toUpperCase();

// switch (turno){
//     case ("M"):
//         console.log("Bom dia!");
//         break;
//     case ("V"):
//         console.log("Boa tarde!");
//         break;
//     case ("N"):
//         console.log("Boa noite!");
//         break;
//     default:
//         console.log("Informe um turno válido.");
    
    
// }

//EXERCÍCIO 4

// const genero = prompt("Informe o gênero do filme:").toLowerCase();
// const preco = Number(prompt("Informe o preço do ingresso:"));

// if(genero === "fantasia" && preco < 15){
//     console.log("Bom filme!");
// }else{
//     console.log("Escolha outro filme!")
// }


//DESAFIOS
//DESAFIO 1

// const genero = prompt("Informe o gênero do filme:").toLowerCase();
// const preco = Number(prompt("Informe o preço do ingresso:"));

// if(genero === "fantasia" && preco < 15){
//     const lanche = prompt("Qual lanche você vai comprar?");
//     console.log("Bom filme!");
//     console.log("Aproveite o seu", lanche);
// }else{
//     console.log("Escolha outro filme!")
// }

//DESAFIO 2
//Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

// const nome = prompt("Informe nome completo:");
const tipoJogo = prompt("Qual tipo de jogo vai assistir? Digite IN para internacional ou DO para doméstico.").toLowerCase;
const etapaJogo = prompt("Qual etapa da competição vai assistir? Digite SF para semi-final, DT para decisão de terceiro lugar ou FI para final.").toLowerCase;
const categoria = prompt("Qual a categoria do ingresso? Digite um número de 1 a 4.");
// const quantidade = Number(prompt("Quantos ingressos deseja comprar?"));

//começando pela categoria
//verificar etapas
//verficar tipo de jogo
const precoSemiFinal = [1320,  880, 550, 220];
const precoDecisaoTercLugar = [660,  440, 330, 170];
const precoFinal = [1980,  1320, 880, 330];
const dolar = 4.10;
let precoIngresso;
switch(categoria){
    case "1":
        console.log("entrei")
        if(etapaJogo === "sf"){
            if(tipoJogo === "in"){
                precoIngresso = dolar * precoSemiFinal[categoria - 1];
                console.log(precoIngresso)
            }else if(tipoJogo === "do"){
                precoIngresso = precoSemiFinal [categoria - 1];
                console.log(precoIngresso)
            }else{
                console.log("Tipo de jogo inválido.");
            }
        }else if(etapaJogo === "dt"){
            
        }else if(etapaJogo === "fi"){
            
        }else{
           console.log("Etapa inválida.");
        }
        break;
    case 2:
        if(etapaJogo === "sf"){
            
        }else if(etapaJogo === "dt"){
            
        }else if(etapaJogo === "fi"){
            
        }else{
            console.log("Etapa inválida.");
        }
        break;
    case 3:
        if(etapaJogo === "sf"){
            
        }else if(etapaJogo === "dt"){
            
        }else if(etapaJogo === "fi"){
            
        }else{
            console.log("Etapa inválida.");
        }
        break;
    case 4:
        if(etapaJogo === "sf"){
            
        }else if(etapaJogo === "dt"){
            
        }else if(etapaJogo === "fi"){
            
        }else{
            console.log("Etapa inválida.");
        }
        break;
    default:
        console.log("Categoria inválida.");
}

