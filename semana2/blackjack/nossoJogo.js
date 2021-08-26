/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

function comecarRodada(){
   //sortear cartas - funcionou
   const primeiraCartaComputador = comprarCarta();
   const segundaCartaComputador = comprarCarta();
   const primeiraCartaUsuario = comprarCarta();
   const segundaCartaUsuario = comprarCarta();
   const pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   const pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
   
   //imprimir cartas e pontuação - funcionou
   console.log(`Usuário - cartas ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação ${pontuacaoUsuario}`);
   console.log(`Computador - cartas ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação ${pontuacaoComputador}`);
   defineResultado(pontuacaoUsuario, pontuacaoComputador);
}
function defineResultado(pontosUsuario, pontosComputador){
   if(pontosUsuario < pontosComputador){
      console.log("Computador é o vencedor!");
   }else if(pontosUsuario > pontosComputador){
      console.log("Usuário é o vencedor!")
   }else{
      console.log("O jogo empatou!")
   }
}


console.log('Boas-vindas ao jogo de Blackjack!');
if (confirm("Quer iniciar uma nova rodada?")){
   comecarRodada();
}else{
   console.log("O jogo acabou!");//funcionou
}