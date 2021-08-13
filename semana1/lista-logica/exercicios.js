// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite altura do retângulo:"))
  const largura = Number(prompt("Digite largura do retângulo:"))
  
  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite ano atual:"))
  const anoNascimento = Number(prompt("Digite seu ano de nascimento:"))
  
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu e-mail:")

  let mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua cor favorita 1:")
  const cor2 = prompt("Digite sua cor favorita 2:")
  const cor3 = prompt("Digite sua cor favorita 3:")

  const coresFavoritas = [cor1, cor2, cor3]
  console.log (coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui 
  resultado = string1.length === string2.length
  return resultado

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const i = array.length
  return array[i-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  // const i = array.length
  // array.pop()
  // array.push(array[0])
  // const novoArray = [array[i-1], array[0]]
  // return novoArray
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const novastring1 = string1.toLowerCase()
  const novastring2 = string2.toLowerCase()
  return novastring1 === novastring2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}