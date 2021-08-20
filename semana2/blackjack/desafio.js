// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

//     function comecarRodada(){
//       //sortear cartas - funcionou
//       let cartasComputador = [comprarCarta(), comprarCarta()];
//       let cartasUsuario = [comprarCarta(), comprarCarta()];
//       console.log(cartasUsuario)
//       console.log(cartasComputador)
//       //verificar se as duas cartas são A 
//       if(cartasUsuario[0].valor === 11 && cartasUsuario[1].valor){
//          cartasUsuario = [comprarCarta(), comprarCarta()];     
//       }
//       if(cartasComputador[0].valor === 11 && cartasComputador[1].valor){
//          cartasComputador = [comprarCarta(), comprarCarta()];     
//       }
      
//       //exibir 2 cartas do usuario e 1 do computador
//       let continuar =  confirm(`Suas cartas são ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}. A carta revelada do computador é ${cartasComputador[0].texto} \n Deseja comprar mais uma carta?`)
//       calculaPontos(continuar, cartasUsuario, cartasComputador)
      
//    }
//    function calculaPontos(continuar, cartasUsuario, cartasComputador){
//       //calcula pontuação
      
//       let pontuacaoUsuario = 0
//       let pontuacaoComputador = 0
//       for (carta of cartasUsuario){pontuacaoUsuario += carta.valor}
//       for (carta of cartasComputador){pontuacaoComputador += carta.valor}
//       //COLOCAR ISSO EM LOOP
//       while(pontuacaoUsuario < 21 && continuar){
//          for(carta of cartasUsuario){
//             continuar = confirm(`Suas cartas são ${cartasUsuario.texto}. A carta revelada do computador é ${cartasComputador[0].texto} \n Deseja comprar mais uma carta?`)
//             novaCarta = comprarCarta()
//             pontuacaoUsuario += novaCarta
//             console.log(novaCarta)
//             console.log(pontuacaoUsuario)
//          }
//          //acessar cartasUsuario.texto não funciona. tentar criar laço, com i = indices do array cartas. adicionar novas cartas antes do laço.
         
//       }
//       defineResultado(pontuacaoUsuario, pontuacaoComputador);
      
//    }
//    function defineResultado(pontosUsuario, pontosComputador){
//       if(pontosUsuario < pontosComputador){
//          console.log("Computador é o vencedor!");
//       }else if(pontosUsuario > pontosComputador){
//          console.log("Usuário é o vencedor!")
//       }else{
//          console.log("O jogo empatou!")
//       }
//    }
//    console.log('Boas-vindas ao jogo de Blackjack!');
//    if (confirm("Quer iniciar uma nova rodada?")){
//       comecarRodada();
//    }else{
//       console.log("O jogo acabou!");
//    }

