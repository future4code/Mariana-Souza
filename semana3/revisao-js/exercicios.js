// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = [];
     for (let i = array.length; i >= 0; i--){
         arrayInvertido.push(array[i]);
     }
     return arrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares =  []
    for (let i = 0; i< array.length; i++){
        if(array[i] % 2 === 0){
            arrayPares.push(array[i])
        }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevadosADois =  []
    for (let i = 0; i< array.length; i++){
        if(array[i] % 2 === 0){
            array[i] = array[i] * array [i]
            arrayParesElevadosADois.push(array[i])
        }
    }
    return arrayParesElevadosADois

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0];
    for(i=0; i< array.length; i++){
        if (array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }
    return maiorNumero

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = num1;
    let menorNumero = num2;
    if (maiorNumero < num2){
        maiorNumero = num2
        menorNumero = num1
    }
    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    let diferenca = maiorNumero - menorNumero;
    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    
    return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPares = []
    for (i=0; arrayPares.length < n; i++){
        if (i%2 === 0){
            arrayPares.push(i)
        }
    }
    return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero";
    }else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
        return "Isósceles";
    }else{
        return "Escaleno";
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let arrayAtores = []
    for(i=0; i<filme.atores.length; i++){
        arrayAtores.push(" " + filme.atores[i])
    }
    const chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme. diretor} e estrelado por${arrayAtores}.`
    return chamada;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let pessoaAnonima = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = [];
    for(let pessoa of pessoas){
        if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60 ){
            pessoasAutorizadas.push(pessoa)
        }
   }
   return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = [];
    for(let pessoa of pessoas){
        if(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60 ){
            pessoasNaoAutorizadas.push(pessoa)
        }
   }
   return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}