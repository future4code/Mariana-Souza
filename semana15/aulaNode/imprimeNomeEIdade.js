const nome = process.argv[2] || ""
const idade = process.argv[3] || ""
const novaIdade = Number(idade) + 7

const frase = `Olá, ${nome}! Você tem ${idade} anos. Em 7 anos, você terá ${novaIdade} anos`
console.log(frase)